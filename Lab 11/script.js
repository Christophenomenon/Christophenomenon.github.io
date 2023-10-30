mapboxgl.accessToken = 'pk.eyJ1IjoiaGg3NTgiLCJhIjoiY2xuMXo5bjQxMDJ5YzJrbGpvbXZudTVudSJ9.SzlG3WInkn7aWBEYPJkw0A'
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/hh758/clnb2oxm807hp01ph5taph6yv', // replace this with your style URL,
  center: [-73.935242, 40.730610], // The convention for coordinates is  typically [long, lat]
  zoom: 12 // The zoom level can be any decimal number
});
map.on('load',function(){
  // Give your layer's source a nickname you'll remember easily. I've called my source `sandy_layer`.
  map.addSource('sandy_layer',{
    'type':'vector',
    'url': 'mapbox://hh758.ckhcynaa'
  });
  map.addSource('nycha',{
    'type':'vector',
    'url': 'mapbox://hh758.3f41ic51'
  });
  // add a new layer with your polygons
  map.addLayer({
    'id':'flood_zones',
    'type':'fill',
    'source':'sandy_layer',
    'source-layer':'Sandy_Inundation_Zone-cmkd01',
    'paint':{
      'fill-color':'#00158f',
      'fill-opacity': 0.5
    }
  });
  map.addLayer({
    'id':'public_housing_developments',
    'type':'fill',
    'source':'nycha',
    'source-layer':'Map_of_NYCHA_Developments-3qgdxt',
    'paint':{
      'fill-color':'#FFFF00',
      'fill-opacity': 0.5
    }
  });
});