const config = require('../config');
const request = require('request');
var assert = require('assert');
var lib = require('./index');

describe('Get coordinates for location', function() {
  testCases = ['Rome', 'San Francisco', 'Buenos Aires, Argentina'];
  streetTests = ['680 Mission Street', '944 Market Street', 'Montes Grandes 1380'];
    it('Should return an object', function(done) {
      lib.getPlaceCoordinates(testCases[0], (result) => {
        assert.equal(typeof(result), 'object');
        done();
      });
    });

    it('All values should be null if no location was found', function(done) {
      lib.getPlaceCoordinates('asaksmdskkmgj', function(result) {
        assert.equal(result.ok, false);
        for(let k in result) {
          assert.equal(result.k, null);
        }
        done();
      });
    });
    it('Should accept streets with numbers as a valid location', function(done) {
      for(let i = 0; i < streetTests.length; i++) {
        lib.getPlaceCoordinates(streetTests[i], function(result) {
          assert.equal(result.ok, true);
          assert.equal(typeof(result.lat), 'number', 'Lat should be a number instead got ' + result.lat);
          assert.equal(typeof(result.lon), 'number', 'Lon should be a number instead got ' + result.lon);
        });
      }
      done();
    });
    it('All values should be null if user searches with no input', function(done) {
      lib.getPlaceCoordinates('', function(result) {
        assert.equal(result.ok, false);
        assert.equal(result.lat, null);
        assert.equal(result.lon, null);
      });
      done();
    });
});