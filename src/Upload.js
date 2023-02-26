import "./index.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { useState } from "react"

export default function Upload() {

    const _data = [
        {
            id: "1",
            album: {
                img: "img/cut.png",
                href: "https://www.youtube.com/watch?v=hlLgrjV7GFQ"
            },
            streams: "100,678,778",
            artist: "iann dior",
            title: "cutthroat",
            publishDate: "2022-6-10"
        },
        {
            id: "2",
            album: {
                img: "img/industry-plant.png",
                href: "https://www.youtube.com/watch?v=vx4Sh4IPEcM"
            },
            streams: "90,998,667",
            artist: "iann dior",
            title: "gone girl",
            publishDate: "2022-5-20"
        },
        {
            id: "3",
            album: {
                img: "img/dont.png",
                href: "https://www.youtube.com/watch?v=rx6TNz4mC2Y"
            },
            streams: "90,556,668",
            artist: "iann dior",
            title: "don't wanna believe",
            publishDate: "2021-7-1"
        },
        {
            id: "4",
            album: {
                img: "img/isit.png",
                href: "https://www.youtube.com/watch?v=4KhDCEB07Fc"
            },
            streams: "70,777,555",
            artist: "iann dior",
            title: "is it you",
            publishDate: "2023-1-17"
        },
        {
            id: "5",
            album: {
                img: "img/holding.jpeg",
                href: "https://www.youtube.com/watch?v=BMmUkrUehrM"
            },
            streams: "70,123,324",
            artist: "iann dior",
            title: "Holding On",
            publishDate: "2021-3-22"
        },
    ]

    const [data, setData] = useState(_data)
    const remove = (e) => {
        setData(data.filter(item => item.id !== e.target.id))
    }


    return (
        <>
            <Nav />
            <header>
                <div className="container">
                    <h1>Manage Your Tracks</h1>
                    <p className="lead">The perfect distribution managment system for artist</p>
                </div>
            </header>
            <main>
                <button type="submit" className="btn btn-primary">Upload a Track</button>

                <table>
                    <thead>
                        <tr>
                            <th scope="col">Album</th>
                            <th scope="col">Streams</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Title</th>
                            <th scope="col">Publish Date</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map(item => {
                                return (
                                    <tr>
                                        <td>
                                            <a href={item.album.href} target="_blank" rel="noopener noreferrer">
                                                <img src={item.album.img} alt="holdingOn" />
                                            </a>
                                        </td>
                                        <td>{item.streams}</td>
                                        <td>{item.artist}</td>
                                        <td>{item.title}</td>
                                        <td>{item.publishDate}</td>
                                        <td><button className="btn actions">Edit</button></td>
                                        <td><button className="btn actions" id={item.id} onClick={(e) => remove(e)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </main>
            <Footer />
        </>
    )
}