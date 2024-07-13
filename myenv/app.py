from flask import Flask, jsonify, request, session, send_file, redirect, url_for
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import uuid

app = Flask(__name__)
CORS(app)

app.secret_key = "ABCD"

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# 메인페이지
@app.route('/', methods=['GET'])
def index():
    return jsonify(message='This is main Page')

# 튜토리얼페이지
@app.route('/start', methods=['GET'])
def start_page():    
    return jsonify(message="This is start Page")
    
# 채팅페이지(이미지업로드창)
@app.route('/imgupload', methods=['GET'])
def imgupload():
    global session_id
    session_id = str(uuid.uuid4())
    
    return jsonify(message='This is imageUpload Page', session_id=session_id)

# 서버로 이미지 보냄
@app.route('/command_image', methods=['POST'])
def upload_file():
    session_id = request.headers.get('Session-Id')
    
    file = request.files['file']
    if file:
        filename = secure_filename("final.jpg")
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        print(f"{file_path} 업로드 성공, session ID {session_id}")
        return jsonify(message='파일 업로드 성공', file_path=file_path, sessionId=session_id)

# 명령어 보내기 및 수정된 이미지 받아오기
@app.route('/imageEdit', methods=['POST'])
def receive_command():
    session_id = request.headers.get('Session-Id')

    data = request.json
    command_contents = data.get('command_contents')
    
    result_path = 'uploads/final.jpg'
    
    print(f"사용자 명령 :  '{command_contents}' 세션아이디 :  {session_id}")

    return jsonify(message=command_contents, session_id=session_id, file_path=f'/get_image?url={result_path}')

@app.route('/get_image')
def get_image():
    # URL로 전달된 파일 경로 가져오기
    url = request.args.get('url')

    # 파일 경로로부터 이미지 파일 읽어오기
    img_path = os.path.join(app.root_path, url.lstrip('/'))

    # 이미지 파일을 클라이언트에게 전송
    return send_file(img_path)

if __name__ == '__main__':
    app.run(port=3001)  # Flask 서버를 포트 3001에서 실행
