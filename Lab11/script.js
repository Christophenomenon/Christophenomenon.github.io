mapboxgl.accessToken = 'pk.eyJ1IjoiaGg3NTgiLCJhIjoiY2xuMXo5bjQxMDJ5YzJrbGpvbXZudTVudSJ9.SzlG3WInkn7aWBEYPJkw0A'
const map = new mapboxgl.Map({
  container: 'Hongtao', // container id
  style: 'mapbox://styles/hh758/clo5vasc200hp01pd9cts456i', // replace this with your style URL,
  center: [-122.42285, 37.76869], // The convention for coordinates is  typically [long, lat]
  zoom: 12,// The zoom level can be any decimal number
  pitch: 50,
  bearing: -40
});
map.on('load',function(){  
});