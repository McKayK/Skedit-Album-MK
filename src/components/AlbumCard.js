import React from "react";
import "./AlbumCard.css";

const AlbumCard = ({ albumData }) => {
  return (
    <div className="albumMain">
      <div className="album">
        <h1>{`~${albumData.album}~`}</h1>
        <h2>{`~${albumData.artist}~`}</h2>
        <h3>Track List</h3>
        <div className="song">
          {albumData.songs.map((elem) => (
            <li key={elem}>{`~${elem}~`}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
