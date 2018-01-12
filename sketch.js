//find the data and information on the internet,create musician and input apiKey,build connection of imgs
let musician = ["Michael+Jackson", "Madonna", "The+Beatles","Linkin+Park","Taylor+Swift"];
let apiKey = "fe84a60c65e4219496b276a4daba82ce";
let jsondata;
var img1;
var img2;
var img3;
var img4;
var img5;


function preloadX() {
  //type in the url and import the data and information
  for (let i=0; i<musician.length; i++){
    loadJSON("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+musician[i]+"&api_key=fe84a60c65e4219496b276a4daba82ce"+"&format=json", getData);
    //build the connection with these pictures
    img1 = loadImage('https://lastfm-img2.akamaized.net/i/u/300x300/2a4f16b4f2ce4375a844064dd1be3dee.png');
    img2 = loadImage('https://lastfm-img2.akamaized.net/i/u/300x300/e0f5f6115a0212774ab1d140854130af.png');
    img3 = loadImage('https://lastfm-img2.akamaized.net/i/u/300x300/6b63584b0c8849e9b796864812ab93e7.png');
    img4 = loadImage('https://lastfm-img2.akamaized.net/i/u/300x300/e807b6dba8cb4118c133d61b84ecd7ba.png');
    img5 = loadImage('https://lastfm-img2.akamaized.net/i/u/300x300/4ce775492995d25ebd82f3a76c57a6d7.png');
  }
  //console.log(music[0].artist);
}

function getData(data){
//put images on the right place
    image(img1, 60, 200);
    image(img2, 560, 200);
    image(img3, 1060, 200);
    image(img4, 310, 1000);
    image(img5, 810, 1000);

  jsondata = data;
  console.log(jsondata.artist);
//build the example of chart
noStroke();
//the small green rectangle of listeners
fill(0,200,0);
rect(50,550,50,20);
text("listeners",80,540);
//the small blue rectangle of playcount
fill(0,0,200);
rect(50,600,50,20);
text("playcount",80,590);
//bulid the block that will be clicked ,as a link,make sure it around the link
  noFill();
  stroke(0);
  rect(20, 140, 370, 50);
  fill(0);
//the line under rectangle
  line(100, 750, 1250, 750);
  //show the date and put these text on the right place
  if (jsondata.artist.name == "Michael Jackson"){
    text("Name: Michael Jackson",200,20);
    text("listeners: "+jsondata.artist.stats.listeners,200,70);
    text("playcount: "+jsondata.artist.stats.playcount,200,120);
    text("Want more? Click here for a story",200,170);
    fill(0,200,0);
    text("Michael Jackson",250,780);
//bulid the bar graph with the data
    noStroke();
    fill(0, 200, 0);
    rect(200, 750, 50, -(jsondata.artist.stats.listeners / 50000));
    noStroke();
    fill(0, 0, 200);
    rect(250, 750, 50, -(jsondata.artist.stats.playcount / 2500000));
  }
//repeating the above process
  noFill();
  stroke(0);
  rect(530, 140, 340, 50);
  fill(0);
  if (jsondata.artist.name == "Madonna"){
    text("Name: Madonna",700,20);
    text("listeners: "+jsondata.artist.stats.listeners,700,70);
    text("playcount: "+jsondata.artist.stats.playcount,700,120);
    text("Want more? Click here for a story",700,170);
    fill(0,0,200);
    text("Madonna",450,780);
    noStroke();
    fill(0, 200, 0);
    rect(400, 750, 50, -(jsondata.artist.stats.listeners / 50000));
    noStroke();
    fill(0, 0, 200);
    rect(450, 750, 50, -(jsondata.artist.stats.playcount / 2500000));
  }
  noFill();
  stroke(0);
  rect(1014, 140, 370, 50);
  fill(0);
  if (jsondata.artist.name == "The Beatles"){
    text("Name: The Beatles",1200,20);
    text("listeners: "+jsondata.artist.stats.listeners,1200,70);
    text("playcount: "+jsondata.artist.stats.playcount,1200,120);
    text("Want more? Click here for a story",1200,170);
    fill(0,200,0);
    text("The Beatles",650,780);
    noStroke();
    fill(0, 200, 0);
    rect(600, 750, 50, -(jsondata.artist.stats.listeners / 50000));
    noStroke();
    fill(0, 0, 200);
    rect(650, 750, 50, -(jsondata.artist.stats.playcount / 2500000));
  }
  noFill();
  stroke(0);
  rect(260, 940, 370, 50);
  fill(0);
  if (jsondata.artist.name == "Linkin Park"){
    text("Name: Linkin Park",450,820);
    text("listeners: "+jsondata.artist.stats.listeners,450,870);
    text("playcount: "+jsondata.artist.stats.playcount,450,920);
    text("Want more? Click here for a story" ,450,970);
    fill(0,0,200);
    text("Linkin Park",850,780);
    noStroke();
    fill(0, 200, 0);
    rect(800, 750, 50, -(jsondata.artist.stats.listeners / 50000));
    noStroke();
    fill(0, 0, 200);
    rect(850, 750, 50, -(jsondata.artist.stats.playcount / 2500000));
  }
  noFill();
  stroke(0);
  rect(765, 940, 370, 50);
  fill(0);
  if (jsondata.artist.name == "Taylor Swift"){
    text("Name: Taylor Swift",950,820);
    text("listeners: "+jsondata.artist.stats.listeners,950,870);
    text("playcount: "+jsondata.artist.stats.playcount,950,920);
    text("Want more? Click here for a story",950,970);
    fill(0,200,0);
    text("Taylor Swift",1050,780);
    noStroke();
    fill(0, 200, 0);
    rect(1000, 750, 50, -(jsondata.artist.stats.listeners / 50000));
    noStroke();
    fill(0, 0, 200);
    rect(1050, 750, 50, -(jsondata.artist.stats.playcount / 2500000));
  }
}
//setup the areas
function setup() {
  var canvas = createCanvas(1400, 1320);
  canvas.parent("CanvasContainer");
  textSize(18);
  noLoop();
  //console.log(music[2]);
//make text in the middle
  textAlign(CENTER);
// set background color
  background(255,200,0);
}
// create the mousePressed function that make the areas become the button can link the story webside
function mousePressed(){
  if (mouseX>20 && mouseX<390 && mouseY>140 && mouseY<190){
    window.open("https://last.fm/music/Michael+Jackson/+wiki");
  } else if (mouseX>530 && mouseX<870 && mouseY>140 && mouseY<190){
     window.open("https://last.fm/music/Madonna/+wiki");
  } else if (mouseX>1014 && mouseX<1384 && mouseY>140 && mouseY<190){
     window.open("https://last.fm/music/The+Beatles/+wiki");
  } else if (mouseX>260 && mouseX<630 && mouseY>940 && mouseY<990){
     window.open("https://last.fm/music/Linkin+Park/+wiki");
  } else if (mouseX>765 && mouseX<1135 && mouseY>940 && mouseY<990){
     window.open("https://last.fm/music/Taylor+Swift/+wiki");
  }
}
function draw() {
  //draw the gray areas above the background
  preloadX();
  fill(200);
  noStroke();
  rect(0,0,420,510,20);
  rect(500,0,420,510,20);
  rect(1000,0,400,510,20);
  rect(250,800,420,510,20);
  rect(750,800,420,510,20);

}
