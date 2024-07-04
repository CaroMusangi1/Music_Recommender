#!/usr/bin/python3
import requests

def get_spotify_tracks(access_token):
    url = 'https://api.spotify.com/v1/me/tracks'
    headers = {'Authorization': f'Bearer {access_token}'}
    response = requests.get(url, headers=headers)
    return response.json()
