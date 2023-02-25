//Render the index page
import React from 'react';
import MainPage from './MainPage.js';
import { SearchPage } from './SearchPage.js';

function App(props) {
  return (
    <div className="App">
      {/* <MainPage songs={props.songs}/> */}
      <SearchPage songs={props.songs}/>
    </div>
  );
}

export default App;