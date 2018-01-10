const config = require('../config');
const knex = require('knex')({
  client: 'pg',
  connection: config.database_url + '/airhnr'
});
const bookshelf = require('bookshelf')(knex);

const getLocationsNear = (lat, long, radius) => {
  //lat, long of center of map, and distance radius in meters
  //returns a promise of data
  query = `SELECT * FROM locations WHERE ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::GEOGRAPHY, 4326), ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::GEOGRAPHY) <= ${radius}`;
  // return bookshelf.knex.raw(query);
  return [{ listing: "I'm a listing!" },{ listing: "I'm a listing!" },{ listing: "Me too!" }];
};

module.exports = {
  getLocationsNear: getLocationsNear
};