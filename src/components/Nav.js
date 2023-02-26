import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item navbar-brand">
                <img src="./img/music-track.png" height="50px" alt="Music Track" />
            </li>
            <li className="nav-item dropMenu">
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
                        <Link to="/playlist" className="nav-link">Play List <span className="sr-only"></span></Link>
                        <Link to="/filter" className="nav-link">Filter</Link>
                        <Link to="/upload" className="nav-link">Upload <span className="sr-only"></span></Link>
                    </div>
                </div>
            </li>
            <li className="nav-item links active">
                <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item links active">
                <Link to="/playlist" className="nav-link">Playlist <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item links active">
                <Link to="/filter" className="nav-link">Filter</Link>
            </li>
            <li className="nav-item links active">
                <Link to="/upload" className="nav-link">Upload <span className="sr-only"></span></Link>
            </li>
            </ul>
        </nav>
    )
}