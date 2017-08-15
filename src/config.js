const Config = {

    // user should define these
    SURVEY_ID: "7a633071bf7f40538d17d0664d46ac26",
    TILESET_ID: "cityofdetroit.d9h31wp8",
    TILESET_LAYER: "buildings",

    // fields to autofill
    // tileset field names must match esri feature service!
    AUTOFILL: {
        main_address: "Main Address",
        secondary_address: "Alt. Address",
        aka: "Name",
        building_id: null,
        housing_units: "# of Units"
    },

    HUNIT_COLORS: [
        [0, 'white'],
        [2, 'blue'],
        [8, 'green'],
        [16, 'yellow'],
        [32, 'orange'],
        [64, 'red'],
    ],

    /**
     * @constant {array} stops
     * Building footprint symbology
     */
    FP_COLORS: [
        // [81, 'rgb(140,212,226)'],
        [81, 'rgb(0,147,255)'],
        [82, 'rgb(0,147,255)'],
        [83, 'rgb(0,147,255)'],
        [84, 'rgb(110,66,244)'],
        [11, 'rgb(114,155,93)'],
        [12, 'rgb(34,85,133)'],
        [13, 'rgb(34,85,133)'],
        [14, 'rgb(109,82,123)'],
        [21, 'rgb(242,92,3)'],
        [22, 'rgb(242,92,3)'],
        [23, 'rgb(255,0,0)'],
        [24, 'rgb(255,0,0)'],
        [25, 'rgb(144,255,0)'],
        [26, 'rgb(144,255,0)'],
        [31, 'rgb(255,202,75)'],
        [32, 'rgb(255,202,75)'],
        [33, 'rgb(255,202,75)'],
        [34, 'rgb(255,202,75)'],
        [35, 'rgb(255,202,75)'],
        [36, 'rgb(255,202,75)'],
        [37, 'rgb(255,202,75)'],
        [38, 'rgb(255,202,75)'],
        [39, 'rgb(255,202,75)'],
        [40, 'rgb(255,202,75)'],
        [41, 'rgb(255,202,75)'],
        [42, 'rgb(255,202,75)'],
        [43, 'rgb(255,202,75)'],
        [51, 'rgb(182,91,202)'],
        [52, 'rgb(182,91,202)'],
        [53, 'rgb(182,91,202)'],
        [61, 'rgb(102,177,74)'],
        [62, 'rgb(102,177,74)'],
        [63, 'rgb(102,177,74)'],
        [64, 'rgb(102,177,74)'],
        [65, 'rgb(102,177,74)'],
        [66, 'rgb(102,177,74)'],
        [67, 'rgb(102,177,74)'],
        [68, 'rgb(102,177,74)'],
        [69, 'rgb(102,177,74)'],
        [70, 'rgb(102,177,74)'],
        [71, 'rgb(102,177,74)']
    ]

}

export default Config;