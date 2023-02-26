export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item navbar-brand">
                    <img src="/img/music-track.png" alt="icon" height="50" />
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