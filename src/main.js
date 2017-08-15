console.log("loadin baby boy!")

var mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2l0eW9mZGV0cm9pdCIsImEiOiJjaXZvOWhnM3QwMTQzMnRtdWhyYnk5dTFyIn0.FZMFi0-hvA60KYnI-KivWg';

import Init from './init.js'

// define the map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-83.131, 42.350],
  zoom: 10.75
});

map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}));

map.on('load', function () {
  console.log("We in this bitch")
  Init.addLayer(map, 'cityofdetroit.4xqydmpc', 'buildings')
  // Init.addLocationControls(map);

  map.on('click', 'survey-features-fill', function (e) {
    console.log(e)
  })

})