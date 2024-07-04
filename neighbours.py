#!/usr/bin/bash

from sklearn.neighbors import NearestNeighbors
import numpy as np

def train_model(user_data):
    # Example user_data: [{'song_id': 1, 'features': [0.1, 0.2, ...]}, ...]
    X = np.array([song['features'] for song in user_data])
    model = NearestNeighbors(n_neighbors=5).fit(X)
    return model

def recommend_songs(model, song_features):
    distances, indices = model.kneighbors([song_features])
    return indices[0]
