import React from 'react';
import './index.css';
import { useState } from 'react';
import Footer from "./components/Footer"
import Favicon from 'react-favicon';
import Nav from "./components/Nav"

export default function MainPage(props) {
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(false);
    
  
    function generatePlaylist(event) {
      event.preventDefault();
      
      const songs1 = props.songs.filter(song => song.genre === genre1);
      const songs2 = props.songs.filter(song => song.genre === genre2);
      const songs3 = props.songs.filter(song => song.genre === genre3);
    
      const shuffled1 = shuffleArray(songs1);
      const shuffled2 = shuffleArray(songs2);
      const shuffled3 = shuffleArray(songs3);
    
      const playlist = shuffled1.slice(0, 4).concat(shuffled2.slice(0, 4)).concat(shuffled3.slice(0, 4));
      
      setLoading(true);
      const promises = playlist.map((song) =>
        fetch(`https://itunes.apple.com/search?term=${song.song} ${song.artist}&entity=song&limit=1`)
          .then((response) => response.json())
          .then((data) => {
            const previewUrl = data.results[0].previewUrl;
            const artistPicture = data.results[0].artworkUrl100;
            const songPicture = data.results[0].artworkUrl100;
            return { ...song, previewUrl, artistPicture, songPicture };
          })
          .catch((error) => console.log(error))
      );
  
      Promise.all(promises).then((playlistWithPreviews) => {
        setPlaylist(playlistWithPreviews);
        setLoading(false);
      });
    }

    function shuffleArray(array) {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function artistCard(song) {
      return (
        <div className="col-md-3 mb-3" key={song.artist}>
          <div className="card h-100">
            <img src={song.artistPicture} className="card-img-top" alt={`${song.artist} Image`} />
            <div className="card-body">
              <h5 className="card-title">{song.artist}</h5>
              <p className="card-text">{song.genre}</p>
            </div>
          </div>
        </div>
      );
    }
    
    function songCard(song) {
      return (
        <div className="col-md-3 mb-3" key={song.song}>
        <div className="card h-100">
        <img src={song.songPicture} className="card-img-top" alt={`${song.song} Image`} />
        <div className="card-body">
            <h5 className="card-title">{song.song}</h5>
            <h6 className="card-subtitle">{song.artist}</h6>
            <p className="card-text">{song.genre}</p>
              {song.previewUrl && (
                <div className="audio-container">
                  <audio controls className="audio-player">
                    <source src={song.previewUrl} type="audio/mpeg" />
                  </audio>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
              
  return (
    <div className="App">
      <Favicon url="./img/music-track.png" />
    <div className="tophalf">
      <Nav />

      <header className="homepage-header">
        <div className="container">
          <h1 className="homepage-h1">Music</h1>
          <p className="lead">Generate your own playlist</p>
        </div>
      </header>

      <main>
        <div className="container">
          <h2 style={{ lineHeight: '2em', fontWeight: 900, color: '#0088cc' }} className="homepage-h2">
            Generate Your Own Playlist
          </h2>
          <form onSubmit={generatePlaylist}>
            <div className="form-group">
              <select
                className="form-control"
                id="genre1"
                value={genre1}
                onChange={(event) => setGenre1(event.target.value)}
              >
                <option value="">-- Please select a genre --</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="country">Country</option>
                <option value="Dance/Electronic">Electronic</option>
                <option value="easy listening">Easy Listening</option>
                <option value="metal">Metal</option>
                <option value="hip hop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="latin">Latin</option>
              </select>
            </div>

            <div className="form-group">
              <select className="form-control" id="genre2" value={genre2} onChange={(event) => setGenre2(event.target.value)}>
                <option value="">-- Please select a genre --</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="country">Country</option>
                <option value="Dance/Electronic">Electronic</option>
                <option value="easy listening">Easy Listening</option>
                <option value="metal">Metal</option>
                <option value="hip hop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="latin">Latin</option>
              </select>
              </div>
              <div className="form-group">
              <select className="form-control" id="genre3" value={genre3} onChange={(event) => setGenre3(event.target.value)}>
                <option value="">-- Please select a genre --</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="country">Country</option>
                <option value="Dance/Electronic">Electronic</option>
                <option value="easy listening">Easy Listening</option>
                <option value="metal">Metal</option>
                <option value="hip hop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="latin">Latin</option>
              </select>
              </div>
            <button type="submit" className="btn btn-primary">
              Generate Playlist
            </button>

            {loading && <p>Loading...</p>}
            {playlist.length > 0 && (
              <div>
                <h2 style={{ lineHeight: '2em', fontWeight: 900, color: '#0088cc' }} className="homepage-h2">
                  Recommended Artists
                </h2>
                <div className="row">{playlist.map(artistCard)}</div>
                <h2 style={{ lineHeight: '2em', fontWeight: 900, color: '#0088cc' }} className="homepage-h2">
                  Your Playlist
                </h2>
                <div className="row">{playlist.map(songCard)}</div>
              </div>
            )}
            
          </form>
        </div>
      </main>
      <Footer />
</div>
    </div>
  );
}

