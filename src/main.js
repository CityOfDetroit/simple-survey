var mapboxgl = require('mapbox-gl');

import Init from './init.js'
import Helpers from './helpers.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiY2l0eW9mZGV0cm9pdCIsImEiOiJjaXZvOWhnM3QwMTQzMnRtdWhyYnk5dTFyIn0.FZMFi0-hvA60KYnI-KivWg';

// define the map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-83.131, 42.350],
  zoom: 10.75
});

map.on('load', function () {
  map.setLayoutProperty('building', 'visibility', 'none');
  Init.addLayer(map, 'cityofdetroit.4xqydmpc', 'buildings');
  Init.addLocationControls(map);
  map.setFilter('survey-features-highlight', ['==', 'building_id', 'NONE'])


  map.on('click', 'survey-features-fill', function (e) {
    let feat = e.features[0].properties
    map.setFilter('survey-features-highlight', ['==', 'building_id', feat.building_id])
    let params = {
      'itemID': Init.SURVEY_ID,
      'field:mainAddress': `${feat['loadd1']} ${feat['street1']}`,
      'field:building_id': `${feat['building_id']}`,
      'field:housing_units': `${feat['housing_units']}`
    }
    let url = `arcgis-survey123://?${Object.keys(params).map(function(k) { return `${k}=${encodeURIComponent(params[k])}` }).join("&")}`
    Helpers.printFeatureDetails(e.features[0], url)
  })

})