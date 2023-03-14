//Render the index page
import React from 'react';
import MainPage  from './MainPage.js';
import { FilterPage } from './FilterPage.js';
import Upload  from './Upload.js';
import  Playlist  from './Playlist.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<MainPage songs={props.songs}/>}/>
        <Route path="/filter" element={<FilterPage songs={props.songs}/>}/>
        <Route path="/upload" element={<Upload songs={props.songs}/>}/>
        <Route path="/playlist" element={<Playlist songs={props.songs}/>}/>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
