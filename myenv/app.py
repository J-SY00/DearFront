from flask import Flask, jsonify, request, session
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

# 채팅페이지
@app.route('/start', methods=['GET'])
def start_page():
    # 세션 생성 및 session객체 저장
    session_id = str(uuid.uuid4())
    session['session_id'] = session_id
    return jsonify(message="This is start Page", session_id=session_id)

# 서버로부터 이미지 결과 받음
@app.route('/api/image', methods=['POST'])
def generate_image():
    data = request.json
    user_message = data.get('message')

    # Replace this with your actual image generation logic
    # image_url = "https://via.placeholder.com/150"
    image_url = "https://picsum.photos/id/1/200/300"

    return jsonify(imageUrl=image_url)

# 서버로 이미지 보냄
@app.route('/command_image', methods=['POST'])
def upload_file(): 
    # 세션아이디 가져오기
    session_id = request.headers.get('Session-Id')
    
    file = request.files['file']
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        print(f"{file_path} 업로드 성공, session ID {session_id}")
        return jsonify(message='파일 업로드 성공', filePath=file_path, sessionId=session_id)

# 서버로 명령어 보냄
@app.route('/command', methods=['POST'])
def receive_command():
    
    session_id = request.headers.get('Session-Id')
    
    data = request.json
    command_contents = data.get('command_contents')

    print(f"사용자 명령 :  '{command_contents}' 세션아이디 :  {session_id}")
    return jsonify(message=command_contents, session_id=session_id)

# 리셋버튼 클릭 시 세션 초기화
@app.route('/reset_session', methods=['POST'])
def reset_session():
    session.pop('session_id', None)
    new_session_id = str(uuid.uuid4())
    session['session_id'] = new_session_id
    
    print(f"세션 리셋 : {new_session_id}")
    return jsonify(message="세션 리셋", session_id=new_session_id)


if __name__ == '__main__':
    app.run(port=3001)  # Flask 서버를 포트 3001에서 실행
