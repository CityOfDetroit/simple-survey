import Config from './config.js'
var _ = require('lodash');

const Helpers = {
    printFeatureDetails: function (elem_id, feature, survey_url) {
        let details = document.getElementById(elem_id)
        details.innerHTML = '';
        _.forEach(Config.AUTOFILL, (v, k) => {
            if (v == null) { return }
            details.innerHTML += `<span>${v}: </span><span><b>${feature.properties[k] || ''}</span></b></br>`
        })
        details.innerHTML += `<a href="${survey_url}">Start Address Survey</a>`
    }
}

export default Helpers;