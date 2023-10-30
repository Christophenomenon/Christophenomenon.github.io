// You'll be inserting your JS code to initialize your map here
mapboxgl.accessToken = 'pk.eyJ1IjoiaGg3NTgiLCJhIjoiY2xuMXo5bjQxMDJ5YzJrbGpvbXZudTVudSJ9.SzlG3WInkn7aWBEYPJkw0A'
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/hh758/clnb2oxm807hp01ph5taph6yv', // replace this with your style URL,
  center: [-122.42285, 37.76869], // The convention for coordinates is  typically [long, lat]
  zoom: 12 // The zoom level can be any decimal number
});
map.on('load',function(){});