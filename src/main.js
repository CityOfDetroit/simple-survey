var mapboxgl = require('mapbox-gl');

import Initialize from './init.js'
import Helpers from './helpers.js'
import Config from './config.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiY2l0eW9mZGV0cm9pdCIsImEiOiJjaXZvOWhnM3QwMTQzMnRtdWhyYnk5dTFyIn0.FZMFi0-hvA60KYnI-KivWg';

// define the map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-83.131, 42.350],
  zoom: 13.75
});

map.on('load', function () {

  // change the cursor to crosshair
  map.getCanvas().style.cursor = 'crosshair'

  // turn off the buildings layer from mapbox/light-v9
  map.setLayoutProperty('building', 'visibility', 'none');

  // add survey layer: fill, stroke, highlight layer
  Initialize.surveyLayer(map, Config.TILESET_ID, Config.TILESET_LAYER);

  // add location controls
  Initialize.locationControls(map);

  // only display buildings with housing_units >= 2
  map.setFilter('survey-features-fill', ['>=', 'housing_units', 2])

  // set a null filter for the highlight layer
  map.setFilter('survey-features-highlight', ['==', 'building_id', 'NONE'])

  // when you click on some features:
  map.on('click', 'survey-features-fill', function (e) {
    let feat = e.features[0].properties
    console.log(feat)
    // set the highlight filter
    map.setFilter('survey-features-highlight', ['==', 'building_id', feat.building_id])

    let url = `arcgis-survey123://?itemID=${Config.SURVEY_ID}&${Object.keys(Config.AUTOFILL).map(function(k) { return `field:${k}=${encodeURIComponent(feat[k] || '')}` }).join("&")}`
    console.log(url)
    // print the details to #details box
    Helpers.printFeatureDetails('details', e.features[0], url)
  })

})