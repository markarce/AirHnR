const config = require('../config');
const request = require('request');
const assert = require('assert');
const bcrypt = require('bcrypt');
let Promise = require('bluebird');
const db = require('../database/index');

module.exports.getPlaceCoordinates = (location, callback) => {
  let formatedLocation = location.replace(' ', '+');
  let googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatedLocation}&key=${config.googleKey}`;
  request.get(googleUrl, (err, response, body) => {
    let b = JSON.parse(body);
    let errors = ['ZERO_RESULTS', 'REQUEST_DENIED', 'INVALID_REQUEST'];
    if (err || errors.includes(b.status)) {
      callback({address: null, lat: null, lon: null, place_id: null, ok: false});
    }
    else {
      let results = JSON.parse(body).results[0];
      callback({
        address: results.formatted_address,
        lat: results.geometry.location.lat,
        lon: results.geometry.location.lng,
        place_id: results.place_id,
        ok: true
      });
    }
  });
};

module.exports.hashPassword = (plainPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(5, (err, salt) => {
      if(err) return reject(err);
      bcrypt.hash(plainPassword, salt, (err, hash) => {
        if(err) return reject(err);
        resolve(hash);
      });
    });
  });
}

module.exports.validateUser = (email, plainPassword) => {

  return db.getUserFromDB(email).then((res) => {
    if(!res) {
      return {error: 'Username or Password is incorrect. Please try again.'}
    }
    return bcrypt.compare(plainPassword, res.password).then((valid) => {
      if(valid) {
        return res;
      } else {
        return {error: 'Username or Password is incorrect. Please try again.'}
      }
    });
  });
}
