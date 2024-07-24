from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data for recommendations
recommendations = [
    {"id": 1, "title": "Song 1", "artist": "Artist 1"},
    {"id": 2, "title": "Song 2", "artist": "Artist 2"}
]

# Liked songs list (in-memory)
liked_songs = []

# Endpoint to get recommendations
@app.route('/recommendations', methods=['GET'])
def get_recommendations():
    user_id = request.args.get('user_id')
    if user_id:
        return jsonify(recommendations)
    else:
        return jsonify({"error": "User ID is required"}), 400

# Endpoint to like a song
@app.route('/api/likes', methods=['POST'])
def like_song():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid request"}), 400
    user_id = data.get('user_id')
    song = data.get('song')
    if not user_id or not song:
        return jsonify({"error": "User ID and song are required"}), 400
    liked_songs.append(song)
    return jsonify({"status": "success"}), 201

# Endpoint to get liked songs
@app.route('/api/liked_songs', methods=['GET'])
def get_liked_songs():
    return jsonify(liked_songs)

if __name__ == '__main__':
    app.run(port=3001)