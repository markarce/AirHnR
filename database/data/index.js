module.exports = {
  users: require('./users.json'),
  locations: require('./locations.json'),
}
let userdata = require('./users.json')
let locationdata = require('./location.json')
let nyll = require('./ny_lat_long.json')
let sfll = require('./sf_lat_long.json')
let home_types = ['Home', 'Aprtment', 'Abode', 'Townhouse', 'Mansion', 'Castle', 'Dump', 'Slum', 'House', 'Flat', 'Palace', 'Estate', 'Dwelling', 'Box', 'Co-Op', 'Lean-To', 'Cardboard Box', 'Shanty', 'Cairn', 'Alleyway', 'Flophouse', 'Couch', 'Basement'];


const createUsers = () => {
  let address_info = [['NewYork','NY', '10001'], ['San Francisco', 'CA', '94117']]
  userdata.forEach( (dp, idx) => { 
    let city = idx > 99 ? 1 : 0;
    return {
      username: dp.username,
      password: dp.password,
      first_name: dp.first_name,
      last_name: dp.last_name,
      account_created: db.account_created,
      email: dp.email,
      about_me: dp.about_me,
      avatar_url: dp.avatar_url,
      phone_number: dp.phone_number,
      credit_card_number: dp.credit_card_number,
      address_street: dp.address_street,
      address_city: address_info[city][0],
      address_region: address_info[city][1],
      address_postal_code: address_info[city][2],
      is_host: dp.is_host
    }
  })
}

const createLocations = () => {
  let address_info = [['NewYork', 'NY', '10001'], ['San Francisco', 'CA', '94117']]
  locationdata.forEach((dp, idx) => {
    let city = idx > 99 ? 1 : 0;
    let cityidx = idx > 99 ? idx - 100 : idx;
    let cityll = city === 1 ? sfll : nyll;
    return {
      name: `${dp.adjective.toUpperCase()} ${address_info[city][0]} ${home_types[Math.floor(Math.random()* home_types.length])}`,
      tagline: dp.tagline,
      description: dp.description,
      image_url: dp.image_url,
      room_type: dp.room_type,
      max_guests: dp.max_guests,
      beds: dp.beds,
      bathrooms: dp.bathrooms,
      latitude: cityll[cityidx].latitude,
      longitude: cityll[cityidx].longitude,
      cancellation: dp.cancellation,
      amenities: dp.amenities,
      house_rules: dp.house_rules,
      host_id: idx,
      address_street: dp.address_street,
      address_city: address_info[city][0],
      address_region: address_info[city][1],
      address_postal_code: address_info[city][2]
    }
  })
}


table.string('name');
table.string('tagline', 1000);
table.string('description', 3000);
table.string('address_street');
table.string('address_city');
table.string('address_region');
table.string('address_postal_code');
table.float('latitude');
table.float('longitude');
table.string('image_url', 1000);
table.string('room_type');
table.integer('max_guests');
table.integer('beds');
table.integer('bathrooms');
table.boolean('cancellation');
table.json('amenities');
table.json('house_rules');
table.integer('host_id');
table.foreign('host_id').references('users.id');