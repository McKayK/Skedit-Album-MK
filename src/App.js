import { useState } from "react";
import "./App.css";
import axios from "axios";
import AlbumCard from "./components/AlbumCard";

function App() {
  const [albumData, setAlbumData] = useState();
  const [addAlbum, setAddAlbum] = useState({
    album: "",
    artist: "",
    songs: [],
  });
  const [formStatus, setFormStatus] = useState(false);

  const albumObj = () => {
    if (albumData) {
      setAlbumData();
    } else {
      axios.get("http://localhost:3003/albums").then((res) => {
        console.log(res);
        setAlbumData(res.data);
      });
    }
  };

  const addAlbumForm = () => {
    setFormStatus(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!addAlbum.album) {
      alert("Must Enter All Fields!");
    } else {
      axios.post("http://localhost:3003/albums", { addAlbum });

      setFormStatus(false);
      setAddAlbum({
        album: "",
        artist: "",
        songs: [],
      });
      alert("Your Album Was Added!");
    }
  };

  //change handlers for album objects
  const handleChangeAlbum = (event) => {
    setAddAlbum({ ...addAlbum, album: event.target.value });
    console.log(event.target);
  };
  const handleChangeArtist = (event) => {
    setAddAlbum({ ...addAlbum, artist: event.target.value });
  };
  const handleChangeSongs = (event) => {
    const songs = event.target.value.split(",");
    setAddAlbum({ ...addAlbum, songs: songs });
  };

  return (
    <div className="App">
      <button onClick={albumObj}>
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            fill="none"
            d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"
          ></path>
        </svg>
        View Albums
      </button>
      {!formStatus && (
        <button onClick={addAlbumForm}>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
          </svg>
          Add Album
        </button>
      )}
      {formStatus && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="album">Album Name</label>
            <br />
            <input
              type="text"
              id="album"
              onChange={handleChangeAlbum}
              value={addAlbum.album || ""}
            />
            <br />
            <label htmlFor="artist">Artist/Band Name</label>
            <br />
            <input
              type="text"
              id="artist"
              onChange={handleChangeArtist}
              value={addAlbum.artist || ""}
            />
            <br />
            <label htmlFor="songs">Songs</label>
            <br />
            <textarea
              type="text"
              id="songs"
              onChange={handleChangeSongs}
              value={addAlbum.songs || []}
            />
            <br />

            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      )}
      {albumData &&
        albumData.map((elem) => (
          <AlbumCard key={elem.album} albumData={elem} />
        ))}
    </div>
  );
}

export default App;
