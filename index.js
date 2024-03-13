const { Router } = require('express');
const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000
const apikey = "ddd163a4d228173935a819d6d4386058";

app.use(express.static('client'));



app.get('/lyrics', async (req, res) => {
  var song_title = req.query.q_track;
  var artistname = req.query.q_artist;
  //var apiurl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=Shape%20of%20youq_artist=Ed%20Sheeran&apikey=ddd163a4d228173935a819d6d4386058`
 var apiurl = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=${song_title}&q_artist=${artistname}&apikey=${apikey}`;
 console.log(apiurl);
 var response = await fetch(apiurl);
 var json = await response.json();
 res.json(json);
 

  
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
