import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './Data/Songs.json';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App songs={SongList}/>
  </React.StrictMode>
);


