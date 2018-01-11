const config = require('../config');
const request = require('request');
var assert = require('assert');

module.exports.getPlaceCoordinates = (location, callback) => {
  let formatedLocation = location.replace(' ', '+');
  let googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedLocation}&key=${config.googleKey}`;
  request.get(googleUrl, (err, response, body) => {
    if(err || JSON.parse(body).status === 'ZERO_RESULTS') return callback({address: null, lat: null, lon: null, place_id: null, ok: false});

    let results = JSON.parse(body).results[0];
    locationObject = {
      address: results.formatted_address,
      lat: results.geometry.location.lat,
      lon: results.geometry.location.lng,
      place_id: results.place_id,
      ok: true
    }
    callback(locationObject);
  });
}
