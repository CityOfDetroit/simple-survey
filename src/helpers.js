const Helpers = {
    printFeatureDetails: function(feature, survey_url) {
        console.log(feature)
        let details = document.getElementById('details')
        let fields = {
            'Address': `${feature.properties.loadd1} ${feature.properties.street1}`,
            '# Units': `${feature.properties.housing_units}`
        }
        details.innerHTML = `${Object.keys(fields).map(function (k) {
            return `<span><i>${k}: </span></i><span><b>${fields[k]}</span></b></br>`
        }).join("")}`
        details.innerHTML += `<a href="${survey_url}">Start Address Survey</a>`

    }
}

export default Helpers;