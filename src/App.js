//Render the index page
import React from 'react';
import MainPage  from './MainPage.js';
import { SearchPage } from './SearchPage.js';
import Upload from './Upload.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<MainPage songs={props.songs}/>}/>
        <Route path="/search" element={<SearchPage songs={props.songs}/>}/>
        <Route path="/upload" element={<Upload songs={props.songs}/>}/>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
