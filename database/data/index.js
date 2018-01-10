module.exports = {
  users: require('./users.json'),
  locations: require('./locations.json'),
}
let userdata = require('./users.json')
let locationdata = require('./locations.json')
let nyll = require('./ny_lat_long.json')
let sfll = require('./sf_lat_long.json')
let home_types = ['Home', 'Aprtment', 'Abode', 'Townhouse', 'Mansion', 'Castle', 'Dump', 'Slum', 'House', 'Flat', 'Palace', 'Estate', 'Dwelling', 'Box', 'Co-Op', 'Lean-To', 'Cardboard Box', 'Shanty', 'Cairn', 'Alleyway', 'Flophouse', 'Couch', 'Basement'];

let roomt_types = ['Couch', 'Room'];
let house_pics = require('./pics.json');
let pickOne = (array) => {
  return array[Math.floor(Math.random() * array.length)]
};
let numberInRange = (start, stop) => {
  //return a number in range (inclusive) or between 0- start if stop not given
  if (stop) {
    return Math.floor(Math.random() * (stop - start)) + start;
  }
  else {
    return Math.floor(Math.random() * (start + 1));
  }
};

let generateStay = () => {
  let nights = numberInRange(1, 7);
  let startDay = numberInRange(1, 21);
  let endDay = startDay + nights;
  let month = numberInRange(1, 12);
  return {
    start: new Date(`${month}/${startDay}/2018`), 
    end: new Date(`${month}/${endDay}/2018`)
  }
}

let generateAmenity = () => {
  return {
    wifi: pickOne([true, true, true, true, true, true, false]),
    kitchen: pickOne([false, false, false, false, false, true, false]),
    hotTub: pickOne([false, false, false, false, false, true, false])
  };
};

generateHouseRules = () => {
  pets: pickOne([true, false, false]),
  smoking: pickOne([false, false, false, false, false, true, false]),
  checkIn: '12:00 PM',
  checkOut: '12:00 PM'
}

const createUsers = () => {
  let address_info = [['NewYork','NY', '10001'], ['San Francisco', 'CA', '94117']]
  return userdata.map( (dp, idx) => { 
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
  return locationdata.map((dp, idx) => {
    let city = idx < locationdata.length ? 0 : 1;
    let cityidx = idx < locationdata.length ? idx : idx - 100;
    let cityll = city === 1 ? sfll : nyll;
    return {
      name: `${dp.adjective.toUpperCase()} ${address_info[city][0]} ${pickOne(home_types)}`,
      tagline: dp.tagline,
      description: dp.description,
      image_url: pickOne(house_pics),
      room_type: pickOne(room_types),
      max_guests: numberInRange(1, 5),
      beds: numberInRange(1, 6),
      bathrooms: numberInRange(1, 3),
      latitude: cityll[cityidx].latitude,
      longitude: cityll[cityidx].longitude,
      cancellation: pickOne([true, false]),
      amenities: generateAmenity(),
      house_rules: generateHouseRules(),
      host_id: idx % userdata.length,
      address_street: dp.address_street,
      address_city: address_info[city][0],
      address_region: address_info[city][1],
      address_postal_code: address_info[city][2]
    }
  })
}
