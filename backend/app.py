#!/usr/bin/python3
from flask import Flask, request, jsonify
from models import db, User, Song
from recommendation_engine import get_recommendations

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///music_recommender.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/api/recommendations', methods=['GET'])
def recommendations():
    user_id = request.args.get('user_id')
    recommendations = get_recommendations(user_id)
    return jsonify(recommendations)

@app.route('/api/likes', methods=['POST'])
def like_song():
    data = request.json
    user_id = data['user_id']
    song_data = data['song']
    # Logic to add liked song to the database
    # ...
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)
