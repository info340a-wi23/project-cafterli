import React from 'react';
import './index.css';
import { useState } from 'react';


export default function MainPage(props) {
    const [genre1, setGenre1] = useState('');
    const [genre2, setGenre2] = useState('');
    const [genre3, setGenre3] = useState('');
    const [playlist, setPlaylist] = useState([]);
  
    function generatePlaylist(event) {
      event.preventDefault();
      
      const filteredSongs = props.songs.filter((song) => {
        return song.genre === genre1 || song.genre === genre2 || song.genre === genre3;
      });
  
      const shuffledSongs = shuffleArray(filteredSongs);
  
      setPlaylist(shuffledSongs.slice(0, 10));
    }
  
    function shuffleArray(array) {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  return (
    <div className="tophalf">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item navbar-brand">
            <img src="./img/music-track.png" height="50px" alt="Music Track" />
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="playlist.html">Play List <span className="sr-only"></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="search.html">Search</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="upload.html">Upload <span className="sr-only"></span></a>
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
          <h2 style={{ lineHeight: '4em', fontWeight: 900, color: '#0088cc' }} className="homepage-h2">
            Generate Your Own Playlist
          </h2>
          <form onSubmit={generatePlaylist}>
            <div className="form-group">
              <label htmlFor="genre1" style={{ color: '#fff' }}>
                Select the type of music you like
              </label>
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
                <option value="Electronic">Electronic</option>
                <option value="classical">Classical</option>
                <option value="Jazz">Jazz</option>
                <option value="Blues">Blues</option>
                <option value="Reggae">Reggae</option>
                <option value="metal">Metal</option>
                <option value="hiphop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="folk">Folk</option>
                <option value="latin">Latin</option>

              </select>
            </div>
            <div className="form-group">
              <label htmlFor="genre2" style={{ color: '#fff' }}>
                Select the type of music you like
              </label>
              <select className="form-control" id="genre2" value={genre2} onChange={(event) => setGenre2(event.target.value)}>
                <option value="">-- Please select a genre --</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="country">Country</option>
                <option value="Electronic">Electronic</option>
                <option value="classical">Classical</option>
                <option value="Jazz">Jazz</option>
                <option value="Blues">Blues</option>
                <option value="Reggae">Reggae</option>
                <option value="metal">Metal</option>
                <option value="hiphop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="folk">Folk</option>
                <option value="latin">Latin</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="genre3" style={{ color: '#fff' }}>
                Select the type of music you like
              </label>
              <select className="form-control" id="genre3" value={genre3} onChange={(event) => setGenre3(event.target.value)}>
                <option value="">-- Please select a genre --</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="country">Country</option>
                <option value="Electronic">Electronic</option>
                <option value="classical">Classical</option>
                <option value="Jazz">Jazz</option>
                <option value="Blues">Blues</option>
                <option value="Reggae">Reggae</option>
                <option value="metal">Metal</option>
                <option value="hiphop">Hip Hop</option>
                <option value="R&B">R&B</option>
                <option value="folk">Folk</option>
                <option value="latin">Latin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Generate Playlist
            </button>

            <div className="playlist">
              {playlist.map((song) => {
                return (
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{song.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{song.artist}</h6>
                      <p className="card-text">{song.genre}</p>

                      <a href={song.url} className="card-link">
                        Listen
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </main>
     <footer className="homepage-footer">
    <p className="text-center">Music &copy; 2023</p>
  </footer>
</div>
  );
}

