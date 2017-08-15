import Config from './config.js'
var _ = require('lodash');

const Helpers = {
    printFeatureDetails: function (elem_id, feature, survey_url) {
        let details = document.getElementById(elem_id)
        let str = '<table>'
        details.innerHTML = '';
        _.forEach(Config.AUTOFILL, (v, k) => {
            console.log(v, k)
            if (v == null) { return }
            str += `<tr><th>${v}: </th> <td>${feature.properties[k] || ''}</td></tr>`
            // details.innerHTML += `<span>${v}: </span><span><b>${feature.properties[k] || ''}</span></b></br>`
        })
        str += `<th>Survey: </th><td><a href="${survey_url}">Click to start</a></td>`
        str += '</table>'
        details.innerHTML = str
    }
}

export default Helpers;