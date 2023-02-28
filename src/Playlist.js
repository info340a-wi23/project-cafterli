import React from 'react';
import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Playlist(props) {


    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
 
  let rand1 = getRandomInt(1,20);
  let rand2 = getRandomInt(1,20);
  let rand3 = getRandomInt(1,20);
  let rand4 = getRandomInt(1,20);
  let rand5 = getRandomInt(1,20);
  let rand6 = getRandomInt(1,20);

// create a new map
const myMap = new Map();

// add some key-value pairs
myMap.set('1', 'song1 author1');
myMap.set('2', 'value2');
myMap.set('3', 'value3');
myMap.set('4', 'value4');
myMap.set('5', 'value5');
myMap.set('6', 'value6');
myMap.set('7', 'value7');
myMap.set('8', 'value8');
myMap.set('9', 'value9');
myMap.set('10', 'value10');
myMap.set('11', 'song1 author1');
myMap.set('12', 'value2');
myMap.set('13', 'value3');
myMap.set('14', 'value4');
myMap.set('15', 'value5');
myMap.set('16', 'value6');
myMap.set('17', 'value7');
myMap.set('18', 'value8');
myMap.set('19', 'value9');
myMap.set('20', 'value10');




// get the value associated with a key
for (const key of myMap.keys()) {
    if (key === rand1) {
        console.log(myMap.get(key));
    }
    if (key === rand2) {
        console.log(myMap.get(key));
    }
    if (key === rand3) {
        console.log(myMap.get(key));
    }
    if (key === rand4) {
        console.log(myMap.get(key));
    }
    if (key === rand5) {
        console.log(myMap.get(key));
    }
    if (key === rand6) {
        console.log(myMap.get(key));
    }
  }

  const songs = [
    {
      genre: '200',
      songs: ['Song 1', 'Song 2', 'Song 3']
    },
    {
      genre: 'disc',
      songs: ['Song 4', 'Song 5', 'Song 6']
    },
    {
      genre: 'app',
      songs: ['Song 7', 'Song 8', 'Song 9']
    }
    
  ];


  function getSongsByButton(songs, genreName) {
    for (const key of songs.keys()) {
      if (key === genreName) {
        return (
          
             
          <p class="song_title_in_play_list">{songs.get(key)}</p>
            
          );
    }
  }
  }
  
  
  

  


  


  return (
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

      <div class="playlist_div">
        <h1>Ranking</h1> 
        <h2>
          Pick your favorite songs
        </h2>
      </div>
      
      <div class="play_list_title_relative">
        <div className="form-group">
          <label for="btn" style= {{color:'#fff' }}>Music genres</label>
          <select className="btn_title" id="exampleFormControlSelect1">
            <option>Rock</option>
            <option>Pop</option>   
            <option>Country</option>
            <option>Electronic</option>
            <option>Classical</option>
            <option>Blues</option>
            <option>Other</option>
          </select>
        </div>  
      </div>
      
      <div class="play_list_city_pos">
        <div className="form-group">
          <label for="exampleFormControlSelect1" style={{color:'#fff'}}>Cities</label>
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
      <div class="play_list_top_pos">
        <button id="200" type="submit" class="btn_tda">Top 200</button>
      </div>
    </p>
    
    


     <p>
      <div class="play_list_dis_pos">
        <button id="disc" onclick="myFunction()" type="submit" class="btn_tda">Discovery</button>
      </div>
    </p>

    <p>
      <div class="play_list_app_pos">
        <button id="app" type="submit" class="btn_tda">App</button>
      </div>  
    </p>

    <div id="play_list_overall_div">
     <div className="song_in_play_list">
       <img src="img/Creeping.jpg" className="pic_in_play_list" alt="Cover_Pic" />
       <p className="song_title_in_play_list">Creeping</p>
       <p className="author_in_play_list">Metro Boomin</p>
       <a href="https://www.youtube.com/watch?v=61ymOWwOwuk">
         <button type="submit" className="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
       </a>  
     </div>
    </div>

    <div class="song_in_play_list">
      <img src="img/Best_Part.jpg" class="pic_in_play_list" alt="Cover_Pic" />
      <p class="song_title_in_play_list">Best Part</p>
      <p class="author_in_play_list">H.E.R</p>
      <a href="https://www.youtube.com/watch?v=vBy7FaapGRo">
        <button type="submit" class="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
      </a>
    </div>

    <div class="song_in_play_list">
      <img src="img/Flowers.jpg" class="pic_in_play_list" alt="Cover_Pic" />
      <p class="song_title_in_play_list">Flowers</p>
      <p class="author_in_play_list">Miley Cyrus</p>
      <a href="https://www.youtube.com/watch?v=G7KNmW9a75Y">
        <button type="submit" class="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
      </a>
    </div>

    <div class="song_in_play_list">
      <img src="img/Popstar.jpg" class="pic_in_play_list" alt="Cover_Pic" />
      <p class="song_title_in_play_list">POPSTAR</p>
      <p class="author_in_play_list">DJ Khaled</p>
      <a href="https://www.youtube.com/watch?v=3CxtK7-XtE0">
        <button type="submit" class="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
      </a>
    </div>

    <div class="song_in_play_list">
      <img src="img/Players.jpg" class="pic_in_play_list" alt="Cover_Pic" />
      <p class="song_title_in_play_list">Players</p>
      <p class="author_in_play_list">Coi Leray</p>
      <a href="https://www.youtube.com/watch?v=tcXraTCoUZE">
        <button type="submit" class="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
      </a>
    </div>

    <div class="song_in_play_list">
      <img src="img/kill_Bill.jpg" class="pic_in_play_list" alt="Cover_Pic" />
      <p class="song_title_in_play_list">kill Bill</p>
      <p class="author_in_play_list">SZA</p>
      <a href="https://www.youtube.com/watch?v=MSRcC626prw">
        <button type="submit" class="btn_play_list"><img src="./img/play_icon.png" height="30px" /></button>
      </a>  
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
