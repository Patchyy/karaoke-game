async function geturl() {
  
  var song_title = document.getElementById('songtitle').value;
  var artistname = document.getElementById('artistname').value;
  var apiurl = `lyrics?q_track=${song_title}&q_artist=${artistname}`;
  //var apiurl = `/lyrics`
  var response = await fetch(apiurl);
  var json = await response.json();
  console.log(json);
  var lyricsstring  = json.message.body.lyrics.lyrics_body;
  var lyricsarray = new Array();
  lyricsarray = lyricsstring.split("\n");
  var lyrics = document.getElementById("lyrics");
  lyrics.innerHTML = "<span>" + lyricsarray.join("</span><span>") + "</span>";
  console.log(lyricsarray);
  


  //var trackingurl = document.getElementById('url').innerHTML = json.message.body.lyrics.script_tracking_url;
  
  var audio = new Audio('../rene.mp3');
  audio.currentTime = 0;
  audio.play();

  //wacht 9 seconden voordat het liedje begint
  await delay(9000);

  for (let i = 0; i < lineIntervals.length; i++) {
    var interval = lineIntervals[i];
    lyrics.children[interval.index].style.color = interval.color;
    if(interval.index != 0){
      lyrics.children[interval.index-1].style.color = "#ffffff"
    }
    await delay(interval.interval); 
    
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var lineIntervals = [
{index : 0,interval : 3200, color : "#57b560"},
{index : 0,interval : 2000, color : "#ffffff"},
{index : 1,interval : 3000, color : "#57b560"},
{index : 1,interval : 500, color : "#ffffff"},
{index : 2,interval : 4500, color : "#57b560"},
{index : 2,interval : 500, color : "#ffffff"},
{index : 3,interval : 4000, color : "#57b560"},
{index : 4,interval : 4000, color : "#57b560"},
{index : 4,interval : 1000, color : "#ffffff"},
{index : 5,interval : 4000, color : "#57b560"},
{index : 6,interval : 4000, color : "#57b560"},
{index : 7,interval : 5000, color : "#57b560"},
{index : 8,interval : 1000, color : "#57b560"},
{index : 9,interval : 3000, color : "#57b560"},
{index : 10,interval : 3000, color : "#57b560"},
{index : 10,interval : 2000, color : "#ffffff"},
{index : 11,interval : 3000, color : "#57b560"},
{index : 12,interval : 4000, color : "#57b560"},
{index : 12,interval : 2000, color : "#ffffff"},
{index : 13,interval : 4000, color : "#57b560"},
]