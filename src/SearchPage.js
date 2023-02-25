import React from 'react';
import './index.css';
import { useState } from 'react';
import songdata from './Data/searchpagedata.json';
import { indexOf } from 'lodash';
import Logo from './img/music-track.png';

export function SearchPage(props){
    const languageData = [...new Set(songdata.map((song) => song.language))];
    const genreData = [...new Set(songdata.map((song) => song.genre))];
    const songs = songdata.map((song) => {
        return <SongDataRow key={song.song} song ={song}/>
    })

    const [languages, setLanguages] = useState(languageData);
    const [genres, setGenres] = useState(genreData);

    function checkboxCallback(event){
        
    }

    
    console.log(languageData);
    const formData = [{name: "genre", data: genres}, {name: "language", data: languages}]
    return(
        <body>
            <Navbar img={Logo}/>
            <main className="flex-container-body">
                <Form data={formData}/>
                <input className="btn filter" type="button" value="Find New Songs!"/>
                <table className="table">
                    <thead>
                        
                    </thead>
                    <tbody>
                        {songs}
                    </tbody>
                </table>
            </main>
            <Footer/>
        </body>
    )
}

function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item navbar-brand">
                <img src={props.img} height="50px"/>
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
    )
}

function Footer(){
    return(
        <footer>
        <p className="footer-contact">Contact Us</p>
        <p><a href="mailto:music@uw.com"><span className="material-icons">email</span> music@uw.com</a></p>
        <p><a href="tel:206-888-8088"><span className="material-icons">phone</span> 206-888-8088</a></p>
        <p>&copy; Music 2022</p>
        </footer>
    )
}

function SongDataRow({song}){
    return(
        <tr>
            <td>{song.song}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.language}</td>
            <td>{song.soundtrack ? "Yes" : "No"}</td>
        </tr>
    )
}

function Choices(props){
    return(
        <div className='choice'>
            <input type="checkbox" id={props.name}/>
            <label htmlFor={props.name}>{props.name.toUpperCase()}</label>
        </div>
    )
}

function CheckBox(props){
    const choices = props.options.map((option) => {
        return <Choices name={option} key={option}/>
    })
    return(
        <form className={'userinput ' + props.type}>
            <h1>{props.type.toUpperCase()}</h1>
            {choices}
        </form>
    )
}

function Form(props){
    const checkBoxes = props.data.map((data) => {
        return <CheckBox type={data.name} options={data.data} key={data.name}/>
    })

    return(
        <div className="flex-container inputs">
            {checkBoxes};
            <Options />
        </div>
    )
}

function Options(props){
    return(
        <div className="userinput">
            <div className="artistgen">
                <h1>Artist Gender</h1>
                <input type="checkbox" id="male"/>
                <label htmlFor="gen">Male</label>
                <input type="checkbox" id="female"/>
                <label htmlFor="gen">Female</label>
                <input type="checkbox" id="band"/>
                <label htmlFor="gen">Band</label>
            </div>
        </div>
    )
}