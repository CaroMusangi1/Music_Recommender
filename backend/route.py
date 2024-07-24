@app.route('/api/users', methods=['POST'])
def create_user():
    # ...

@app.route('/api/songs', methods=['GET'])
def get_songs():
    # ...

@app.route('/api/likes', methods=['POST'])
def like_song():
    # ...

@app.route('/api/liked_songs', methods=['GET'])
def get_liked_songs():
    # ...
