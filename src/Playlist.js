import React from 'react';
import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Playlist(props) {

  const [genre1, setGenre1] = useState('');
  const [playlist, setPlaylist] = useState([]);
  
  console.log(genre1);
  console.log(playlist);

  
  /*const generatePlaylist = () => {
    for (let i = 0; i < total.length; i++) {
      if (total[i].genre == genre1) {
        playlist.push =total[i];
      }
      
    }
     
  } */

  function randomPlaylist(playlist) {
    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * 26);
      test.push = playlist[randomNum];
    }
    console.log(test);
  } 
  
  /*const randomPlaylist = () => {
    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * 26);
      playlist.push = total[i];
    }
    setPlaylist(playlist);
    
  } */

  
  /*function song_info(song) {
    return (
      <div>
        <p className="author_in_play_list">
          song.author;
        </p>
        <a href="https://www.youtube.com/watch?v=61ymOWwOwuk">
          <button type="submit" className="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
        </a>
      </div>    
    )  
  }  */
  

  let total = [{author:"RAYE & 070 Shake", track: "Escapism", image:"img/escapism.jpg", href: "https://www.youtube.com/watch?v=Dll6VJ2C7wo", genre: "Pop"}, 
    {author: "PinkPantheress & Ice Spice" , track:"Boy's a liar Pt.2", image:"./img/boyliar.jpg", href:"https://www.youtube.com/watch?v=Dll6VJ2C7wo", genre: "Pop"}, 
    {author:"Miley Cyrus", track:"Flowers", image:"./img/Flowers.jpg", href:"https://www.youtube.com/watch?v=G7KNmW9a75Y", genre:"Pop" },
    {author:"Lady Gaga", track:"Bloody Mary", image:"./img/B-mary.jpg", href:"https://www.youtube.com/watch?v=VFwmKL5OL-Q", genre: "Pop"},
    {author:"Taylor Swift", track:"Anti-Hero", image:"./img/anti-h.jpg", href:"", genre:"Pop" },
    {author:"Sam Smith & Kim Petras", track:"Unholy", image:"./img/unholy.jpg", href:"https://www.youtube.com/watch?v=Uq9gPaIzbe8", genre: "Pop"},
    
    {author:"Fall Out Boy", track: "Love From the other side", image:"./img/love-from.jpg", href: "https://www.youtube.com/watch?v=oBrkbWSB3Ls", genre: "Rock"}, 
    {author: "Pierce The Veil" , track:"Emergency Contact", image:"./img/emergency-c.jpg", href:"https://www.youtube.com/watch?v=Vr2PWqeRWlQ", genre: "Rock"}, 
    {author:"Meet Me", track:"Kool", image:"./img/kool.jpg", href:"https://www.youtube.com/watch?v=UTpYD0yf81o", genre:"Rock" },
    {author:"Linkin Park", track:"Lost", image:"./img/lost.jpg", href:"https://www.youtube.com/watch?v=7NK_JOkuSVY", genre: "Rock"},
    {author:"Barns Courtney", track:"Supernatural", image:"./img/super-n.jpg", href:"https://www.youtube.com/watch?v=I3JEJAXJ-Z8", genre:"Rock" },
    {author:"grandson", track:"Eulogy", image:"./img/eulogy.jpg", href:"https://www.youtube.com/watch?v=fWz6EjEYmYc", genre: "Rock"},

    {author:"Superstar Pride", track: "Painting Pictures", image:"./img/painting-p.jpg", href: "https://www.youtube.com/watch?v=pDFHyA7KgDw", genre: "Rap"}, 
    {author: "Metro Boomin" , track:"Creeping", image:"./img/Creeping.jpg", href:"https://www.youtube.com/watch?v=61ymOWwOwuk", genre: "Rap"}, 
    {author:"Coi Leray", track:"Players", image:"./img/Players.jpg", href:"https://www.youtube.com/watch?v=tcXraTCoUZE", genre:"Rap" },
    {author:"Nicki Minaj", track:"Red Ruby Da Sleeze", image:"./img/red-r.jpg", href:"https://www.youtube.com/watch?v=UQQx9NA65bU", genre: "Rap"},
    {author:"Drake & 21 Savage", track:"Spin Bout U", image:"./img/spin-b.jpg", href:"https://www.youtube.com/watch?v=jALeORvCJG8", genre:"Rap" },
    {author:"Metro Boomin, Travis Scott & Young Thug", track:"Trance", image:"./img/Creeping.jpg", href:"https://www.youtube.com/watch?v=TxUdlC0057s", genre: "Rap"},

    {author:"London Brew", track: "Raven Flies Low", image:"./img/raven-f.jpg", href: "https://www.youtube.com/watch?v=eWj5fK1n0CE&list=OLAK5uy_ndbYPws_RLHtxDMtXvCFQQ7QLJCCQ5po0", genre: "Jazz"}, 
    {author: "Brandee Younger" , track:"If it's magic", image:"./img/if-i.jpg", href:"https://www.youtube.com/watch?v=fX36mGEqfw4", genre: "Jazz"}, 
    {author:"Count Basie", track:"St. Thomas", image:"./img/St-t.jpg", href:"https://www.youtube.com/watch?v=2rUpStJ7lP4", genre:"Jazz" },
    {author:"Arturo", track:"Un Poco Loco", image:"./img/un-p.jpg", href:"https://www.youtube.com/watch?v=yg8116aeD7E", genre: "Jazz"},
    {author:"Reginald Chapman", track:"Hearing is Seeing", image:"./img/hearing-i.png", href:"https://www.youtube.com/watch?v=9q6pqy99tRM&list=RD9q6pqy99tRM&start_radio=1", genre:"Jazz" },
    

    {author:"Swin-S", track:"Just Beautiful you are", image:"./img/just-b.jpg", href:"https://www.youtube.com/watch?v=hbr-_BsDZ8E", genre:"Other"},
    {author:"Dedublüman & Mavzer Tabancas", track: "Belki", image:"./img/belki.jpg", href:"https://www.youtube.com/watch?v=7-_qRtGbCTE", genre:"Other" }
    
  ];

  
  

  
  

  


  


  return (
    <div className="tophalf">  
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <ul>
          <li className="nav-item navbar-brand">
            <img src="./img/music-track.png" height="50px" alt="Music Track" />
          </li>
          <li className="nav-item active">
            <Link to="/" >Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="/playlist">Play List <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item active">
            <Link to="/filter" >Filter</Link>
          </li>
          <li className="nav-item active">
            <Link to="/upload" >Upload <span className="sr-only"></span></Link>
          </li>
        </ul>
      </nav>

      <div class="playlist_div">
        <h1 className="homepage-1">Ranking</h1> 
        <h2>
          Pick your favorite songs
        </h2>
      </div>
      
      <div className="play_list_title_relative">
        <div className="form-group">
          <label for="btn" style= {{color:'#fff' }} >Music genres</label>
          <select className="btn_title"  value={genre1}
          onChange={(event) => setGenre1(event.target.value)}>
            <option value="Rap">Rap</option>
            <option value="Pop">Pop</option>   
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Other">Other</option>
          </select>
        </div>  
      </div>
      
      <div className="play_list_city_pos">
        <div className="form-group">
          <label  style={{color:'#fff'}}>Cities</label>
          <select class="btn_title">
            <option>Detroit</option>
            <option>Rome</option>
            <option>Atlanta</option>
            <option>Houston</option>
            <option>Cleveland</option>
            <option>San Francisco</option>
            <option>Los Angles</option>
            <option>Seattle</option>
            <option>New York</option>
            <option>Boston</option>
            <option>Florida</option>
          </select>
        </div>
      </div>  
    
    <p>
      <div className="play_list_dis_pos">
        <button id="disc"  type="submit" class="btn_tda" onClick={randomPlaylist}>Discovery</button>
      </div>
    </p>

    <p>
      <div className="play_list_app_pos">
        <button id="app" type="submit" class="btn_tda" onClick={randomPlaylist}>App</button>
      </div>  
    </p>

    <div>
      {total.map((song) => (
        <div className="song_in_play_list" key = {song.track}>
          <img src={song.image} class="pic_in_play_list" alt="Cover_Pic"/>
          <p className="song_title_in_play_list">{song.track}</p>
          <p className="author_in_play_list"> {song.author}</p>
          <a href={song.href}>
            <button type="submit" className="btn_play_list"><img src="./img/play_icon.png" height="30px" alt="unavailible"/></button>
          </a>
          
        </div>
      
      ))}
    </div>

    <div>
      {playlist.map((song) => (
        <div className="song_in_play_list" key = {song.track}>
          <img src={song.image} class="pic_in_play_list" alt="copyright-violated"/>
          <p className="song_title_in_play_list">{song.track}</p>
          <p className="author_in_play_list"> {song.author}</p>
          <a href={song.href}>
            <button type="submit" className="btn_play_list"><img src="./img/play_icon.png" height="30px" alt="unavailible"/></button>
          </a>
          
        </div>
      
      ))}
    </div>


    <footer>
     <div class="container">
      <p class="footer-contact">Contact Us</p>
      <p><a href="mailto:music@uw.com"><span class="material-icons">email</span> music@uw.com</a></p>
      <p><a href="tel:206-888-8088"><span class="material-icons">phone</span> 206-888-8088</a></p>
      <p>&copy; Music 2022</p>
     </div>
    </footer>

    </div>
    
  )

}
