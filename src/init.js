var mapboxgl = require('mapbox-gl')

import Config from './config.js'

const Initialize = {

    surveyLayer: function (map, tileset, layer) {
        map.addLayer({
            "id": "survey-features-fill",
            "type": "fill",
            "source": {
                type: 'vector',
                url: `mapbox://${tileset}`
            },
            "source-layer": layer,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "property": "build_type",
                    "type": "categorical",
                    "stops": Config.FP_COLORS
                },
                "fill-opacity": 0.25
            }
        });
        map.addLayer({
            "id": "survey-features-line",
            "type": "line",
            "source": {
                type: 'vector',
                url: `mapbox://${tileset}`
            },
            "source-layer": layer,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(0,0,0,0.75)",
                "line-width": {
                    'stops': [
                        [9, 0.1],
                        [15, 0.75],
                        [19, 1.5]
                    ]
                },
                "line-opacity": {
                    'stops': [
                        [9, 0.15],
                        [19, 0.5]
                    ]
                }
            }
        });
        map.addLayer({
            "id": "survey-features-highlight",
            "type": "line",
            "source": {
                type: 'vector',
                url: `mapbox://${tileset}`
            },
            "source-layer": layer,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(137, 65, 244, 1)",
                "line-width": 2
            }
        });


    },

    locationControls: function (map) {
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            fitBoundsOptions: {
                maxZoom: 17.5
            },
            trackUserLocation: true
        }));
    }
}

export default Initialize;