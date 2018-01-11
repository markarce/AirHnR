const config = require('../config');
const knex = require('knex')({
  client: 'pg',
  connection: config.database_url + config.database_name
});
const bookshelf = require('bookshelf')(knex);

const getListingsNear = (lat, long, radius = 3000) => {
  //lat, long of center of map, and distance radius in meters
  //returns a promise of data
  let query = `SELECT locations.*, listings.* FROM locations, listings WHERE ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::geography, 4326), ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography) <= ${radius} AND listings.location_id = locations.id`;
  return bookshelf.knex.raw(query).then(res => res.rows);
};

const getLocationsNear = (lat, long, radius = 3000) => {
  //lat, long of center of map, and distance radius in meters
  //returns a promise of data
  let query = `SELECT * FROM locations WHERE ST_Distance(ST_SetSRID(ST_MakePoint(${long}, ${lat})::geography, 4326), ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography) <= ${radius}`;
  return bookshelf.knex.raw(query).then(res => res.rows);
};

module.exports = {
  getListingsNear: getListingsNear,
  getLocationsNear: getLocationsNear
};