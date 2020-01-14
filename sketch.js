let myMap;
let canvas;
var currentPosition;
const mappa = new Mappa('Leaflet');

var BobbioLat = 45.955449;
var BobbioLon = 9.463799;

// Lets put all our map options in a single object
const options = {
  lat: BobbioLat,
  lng: BobbioLon,
  zoom: 10,
  style: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.png" // default tile for Leaflet
}

function preload() {
  currentPosition = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  console.log(currentPosition);
  currentLat = currentPosition.latitude;
  currentLon = currentPosition.longitude;
  distance = calcGeoDistance(currentLat, currentLon, BobbioLat, BobbioLon, "km");
  // Create a tile map with the options declared
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {

  clear();
  var userpoint = myMap.latLngToPixel(currentLat, currentLon);
  var point = myMap.latLngToPixel(BobbioLat, BobbioLon);
  blendMode(HARD_LIGHT);

  fill(255, 0, 0);
  noStroke();
  ellipse(point.x, point.y, 10);
  text('Bobbio',point.x+15, point.y);
  ellipse(userpoint.x, userpoint.y, 10);
  text('Your location',userpoint.x+15, userpoint.y);
  stroke(255, 0, 0);
  line(point.x,point.y,userpoint.x, userpoint.y);

}
