require("dotenv").config();
const { default: axios } = require("axios");

const albums = require("./database.json");

module.exports = {
  //get all albums
  getAlbum: (req, res) => {
    axios
      .get(albums)
      .then((dbres) => {
        res.status(200).send(dbres.data);
      })
      .catch((err) => console.log(err));
  },
};
