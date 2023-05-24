const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const albums = require("./database.json");

//get list of albums
app.get(`/albums`, (req, res) => {
  res.send(albums.albums);
});

//add an album
app.post("/albums", (req, res) => {
  albums.albums.push(req.body.addAlbum);
});

const PORT = 3003;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
