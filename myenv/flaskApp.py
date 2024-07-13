# 서버 구동
from flask import Flask, request, render_template, redirect, url_for, send_file
from flask_cors import CORS
from gqa_module import *
import os
import sys
module_path = os.path.abspath(os.path.join('..'))
if module_path not in sys.path:
    sys.path.append(module_path)

from PIL import Image
from IPython.core.display import HTML
from functools import partial
from engine.utils import ProgramGenerator, ProgramInterpreter
from prompts.gqa import create_prompt
from prompts.imgeEdit import PROMPT
import googletrans
from dotenv import load_dotenv
load_dotenv()

#DB
from db_connection import connect_to_database
import uuid
import uploads_utils
from werkzeug.utils import secure_filename

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

app = Flask(__name__)
CORS(app)

interpreter = ProgramInterpreter(dataset='imageEdit')

session_id = 0
conn = connect_to_database()
cursor = conn.cursor(buffered=True)

def create_prompt(instruction):
    return PROMPT.format(instruction=instruction)

generator = ProgramGenerator(prompter=create_prompt)
inputs = {}
origin = 'result/original.jpg'
translator = googletrans.Translator()

@app.route('/')
def index():
    return f'''<!doctype html>
    <html>
        <body>
            <h1><a href="/">visprog</a></h1>
            <div>초기화면<div>
            <ol>
                <a href="/start">들어가기</a>
            </ol>
        </body>
    </html>
    '''

@app.route('/start') #입력 받은 값 전송
def start():
    return f'''<!doctype html>
    <html>
        <body>
            <h1><a href="/">visprog </a></h1>
            <div>시작화면<div>
            <ol>
                <a href="/imgupload">들어가기</a>
            </ol>
        </body>
    </html>
    '''

@app.route('/imgupload') #사진 업로드
def imgupload():
    global session_id
    session_id = str(uuid.uuid4())
    sql = 'INSERT INTO Session (session_id) VALUES (%s)'
    cursor.execute(sql, (session_id,))
    conn.commit()
    return f'''<!doctype html>
    <html>
        <body>
            <h1><a href="/">visprog </a></h1>
            <form action="http://localhost:5000/command_image"
                method="POST"
                enctype="multipart/form-data">
                <input type="file" name="file" />
                <input type="submit" />
            </form>
        </body>
    </html>
    '''

### 블러, 컬러팝 사용 시 객체 선택 필수
### >> ex) 낙타를 선택하고 블러해줘
### >> 객체 미선택 시 작동 안함


@app.route('/command_image', methods=['POST']) #이미지 저장 및 커맨드 입력
def imgUploader():
    s3 = uploads_utils.s3Connection()
    bucket = 'dear-image-flask'
    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    if uploads_utils.allowedFile(file.filename):
        filename = secure_filename(file.filename)

        s3_filepath = f'{session_id}/{filename}'
        s3.upload_fileobj(file, bucket, s3_filepath)

    location = s3.get_bucket_location(Bucket=bucket)["LocationConstraint"]
    url = f"https://{bucket}.s3.{location}.amazonaws.com/{s3_filepath}"
    sql = 'INSERT INTO OriginalImage (filepath, session_id) VALUES (%s, %s)'
    val = (url, session_id)
    cursor.execute(sql, val)
    conn.commit()

    return f'''<!doctype html>
    <html>
        <body>
            <form action="/imageEdit" method="post">
                <label for="command_contents">명령을 입력해주세요</label><br>
                <input type="text" id="command_contents" name="command_contents"><br><br>
                <input type="submit" value="입력">
            </form>
        </body>
    </html>
    '''

@app.route('/imageEdit', methods=['POST']) #입력 받은 값 전송
def imageEdit():
    data = request.json
    command_contents = data.get('command_contents')
    # command_contents = request.form['command_contents']
    en_command = translator.translate(command_contents, dest='en')
    sql1 = 'SELECT filepath FROM OriginalImage WHERE session_id=%s'
    val1 = (session_id,)
    cursor.execute(sql1, val1)
    image_path = cursor.fetchone()[0]
    result = exe_imageEdit(image_path, en_command.text, interpreter, generator)

    result_path = 'final.jpg'

    result.save(result_path)
    
    return redirect(url_for('get_image', url=result_path))
    # return f'''<!doctype html>
    # <html>
    #     <body>
    #         <h1><a href="/">visprog</a></h1>
    #         <div> instruction : {command_contents}<div>
    #         <div> instruction : {en_command.text}<div>
    #         <hr>원본 : <img src='{image_path}' width='200' height='200'></hr>
    #         <hr>수정 : <img src='/get_image?url={result_path}' width='200' height='200'></hr>
    #     </body>
    # </html>
    # '''

@app.route('/get_image')
def get_image():
    # URL로 전달된 파일 경로 가져오기
    url = request.args.get('url')

    # 파일 경로로부터 이미지 파일 읽어오기
    img_path = os.path.join(app.root_path, url.lstrip('/'))

    # 이미지 파일을 클라이언트에게 전송
    return send_file(img_path)

app.run()
