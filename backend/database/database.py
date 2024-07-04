#!/usr/binpython3
from models import db, User, Song, LikedSong
from app import app

with app.app_context():
    db.create_all()
