from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()

@app.route('/api/likes', methods=['POST'])
@auth.login_required
def like_song():
