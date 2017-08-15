var mapboxgl = require('mapbox-gl')

const FP_COLORS = [
    [82, 'green'],
    [83, 'red']
]

const Init = {

    SURVEY_ID: "7a633071bf7f40538d17d0664d46ac26",

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
                "fill-color": {
                    "property": "build_type",
                    "type": "categorical",
                    "stops": FP_COLORS
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