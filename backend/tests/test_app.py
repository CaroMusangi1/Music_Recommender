#!/usr/bin/python3

from app import app

def test_recommendations():
    client = app.test_client()
    response = client.get('/api/recommendations?user_id=1')
    assert response.status_code == 200
    assert 'recommendations' in response.get_json()

