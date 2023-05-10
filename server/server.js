const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./modules/artist');
const songListArray = require('./modules/songs');
const albumListArray = require('./modules/albums');



app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

app.get('/songs', (req, res) => {
    res.send(songListArray);
})

app.get('/albums', (req, res) => {
    res.send(albumListArray);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});