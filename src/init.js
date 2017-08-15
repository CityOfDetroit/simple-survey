var mapboxgl = require('mapbox-gl')

const Init = {
    addLayer: function (map, tileset, layer) {
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
                "fill-color": "green",
                "fill-opacity": 0.1
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
                "line-color": "#ff69b4",
                "line-width": 1
            }
        });


    },

    addLocationControls: function (map) {
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    }
}

export default Init;