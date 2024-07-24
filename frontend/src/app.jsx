import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    // Fetch recommendations on component mount
    axios.get('/api/recommendations?user_id=1')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  }, []);

  const likeSong = (song) => {
    // Add song to liked songs
    axios.post('/api/likes', { user_id: 1, song })
      .then(response => {
        if (response.data.status === 'success') {
          setLikedSongs([...likedSongs, song]);
        }
      })
      .catch(error => console.error('Error liking song:', error));
  };

  return (
    <div className="App">
      <h1>Music Recommender</h1>
      <div>
        <h2>Recommendations</h2>
        <ul>
          {songs.map(song => (
            <li key={song.title}>
              {song.title} by {song.artist}
              <button onClick={() => likeSong(song)}>Like</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Liked Songs</h2>
        <ul>
          {likedSongs.map(song => (
            <li key={song.title}>{song.title} by {song.artist}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
