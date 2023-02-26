import React from 'react';
import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./components/Footer"
import Favicon from 'react-favicon';

export default function MainPage(props) {
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [playlist, setPlaylist] = useState([]);
    
  
    function generatePlaylist(event) {
      event.preventDefault();
      
      const songs1 = props.songs.filter(song => song.genre === genre1);
      const songs2 = props.songs.filter(song => song.genre === genre2);
      const songs3 = props.songs.filter(song => song.genre === genre3);
    
      const shuffled1 = shuffleArray(songs1);
      const shuffled2 = shuffleArray(songs2);
      const shuffled3 = shuffleArray(songs3);
    
      const playlist = shuffled1.slice(0, 4).concat(shuffled2.slice(0, 4)).concat(shuffled3.slice(0, 4));
      setPlaylist(playlist);
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
            <div className="wrapper-artist">
              <h5 className="artist-title">{song.artist}</h5>
              <p className="artist-text">{song.genre}</p>
            </div>
      );
    }

    function songCard(song) {
      
      return (
            <div className="wrapper">
              <h5 className="card-title">{song.song}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{song.artist}</h6>
              <p className="card-text">{song.genre}</p>
            </div>
      );
    }
              
  return (
    <div className="App">
      <Favicon url="./img/music-track.png" />
    <div className="tophalf">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item navbar-brand">
            <img src="./img/music-track.png" height="50px" alt="Music Track" />
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="/playlist" className="nav-link">Play List <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="/filter" className="nav-link">Filter</Link>
          </li>
          <li className="nav-item active">
            <Link to="/upload" className="nav-link">Upload <span className="sr-only"></span></Link>
          </li>
        </ul>
      </nav>

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


