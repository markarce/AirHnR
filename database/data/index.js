const userdata = require('./users.json')
const locationdata = require('./locations.json')
const reviewdata = require('./reviews.json')
const nyll = require('./ny_lat_long.json')
const sfll = require('./sf_lat_long.json')
const home_types = ['Home', 'Aprtment', 'Abode', 'Townhouse', 'Mansion', 'Castle', 'Dump', 'Slum', 'House', 'Flat', 'Palace', 'Estate', 'Dwelling', 'Box', 'Co-Op', 'Lean-To', 'Cardboard Box', 'Shanty', 'Cairn', 'Alleyway', 'Flophouse', 'Couch', 'Basement'];

const room_types = ['Couch', 'Room', 'Studio', 'House'];
const house_pics = require('./pics.json');
const pickOne = (array) => {
  return array[Math.floor(Math.random() * array.length)]
};

const numberInRange = (start, stop) => {
  //return a number in range (inclusive) or between 0- start if stop not given
  if (stop) {
    return Math.floor(Math.random() * (stop - start)) + start;
  }
  else {
    return Math.floor(Math.random() * (start + 1));
  }
};

const generateStay = () => {
  let nights = numberInRange(1, 7);
  let startDay = numberInRange(1, 21);
  let endDay = startDay + nights;
  let month = numberInRange(1, 12);
  return {
    start: new Date(`${month}/${startDay}/2018`), 
    end: new Date(`${month}/${endDay}/2018`)
  };
};

const listingRange = () => {
  let startDay = numberInRange(1, 28);
  let endDay = numberInRange(1, 28);
  let startMonth = numberInRange(1, 12);
  let endMonth = numberInRange(1, 12);
  let startYear = pickOne([2017, 2018])
  let endYear = pickOne([2019, 2020])
  return {
    start: new Date(`${startMonth}/${startDay}/${startYear}`),
    end: new Date(`${endMonth}/${endDay}/${endYear}`)
  };
};

const generateAmenity = () => {
  return {
    wifi: pickOne([true, true, true, true, true, true, false]),
    kitchen: pickOne([false, false, false, false, false, true, false]),
    hotTub: pickOne([false, false, false, false, false, true, false])
  };
};

const generateHouseRules = () => {
  return {
    pets: pickOne([true, false, false]),
    smoking: pickOne([false, false, false, false, false, true, false]),
    checkIn: '12:00 PM',
    checkOut: '12:00 PM'
  }
};

const createUsers = () => {
  let address_info = [['NewYork','NY', '10001'], ['San Francisco', 'CA', '94117']]
  return userdata.map( (dp, idx) => { 
    let city = idx > 99 ? 1 : 0;
    return {
      username: dp.username,
      password: dp.password,
      first_name: dp.first_name,
      last_name: dp.last_name,
      account_created: dp.account_created,
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
    };
  });
};

const createLocations = () => {
  let address_info = [['NewYork', 'NY', '10001'], ['San Francisco', 'CA', '94117']]
  return locationdata.map((dp, idx) => {
    let city = idx < locationdata.length / 2 ? 0 : 1;
    let cityidx = idx < locationdata.length - 1 ? idx : idx - 101;
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
      host_id: (idx % userdata.length) + 1,
      address_street: dp.address_street,
      address_city: address_info[city][0],
      address_region: address_info[city][1],
      address_postal_code: address_info[city][2]
    };
  });
};

//500
const createListings = (num) => {
  return Array(num).fill(null).map((dp, idx) => {
    let range = listingRange();
    return {
      start_date: range.start,
      end_date: range.end,
      price: numberInRange(40, 350),
      location_id: idx + 1,
      host_id: (idx % userdata.length) + 1
    };
  });
};

//300
const createBookings = (num) => {
  return Array(num).fill(null).map((dp, idx) => {
    let range = generateStay();
    return {
      start_date: range.start,
      end_date: range.end,
      price: numberInRange(40, 350),
      location_id: numberInRange(1, locationdata.length),
      host_id: (idx % userdata.length) + 1
    };
  });
};

//500
const createFavorites = (num) => {
  return Array(num).fill(null).map((dp, idx) => {
    return {
      location_id: numberInRange(1, locationdata.length),
      user_id: numberInRange(1, userdata.length)
    };
  });
};

// 800
const createLocationReviews = (num) => {
  return Array(num).fill(null).map((dp, idx) => {
    return {
      tagline: pickOne(reviewdata).buzzword.toUpperCase() + pickOne(reviewdata).tagline,
      review_text: pickOne(reviewdata).review,
      stars: numberInRange(1, 5),
      location_id: numberInRange(1, locationdata.length),
      reviewer_id: numberInRange(1, userdata.length)
    };
  });
};

//600
const createHostReviews = (num) => {
  return Array(num).fill(null).map((dp, idx) => {
    return {
      tagline: pickOne(reviewdata).buzzword.toUpperCase() + pickOne(reviewdata).tagline,
      review_text: pickOne(reviewdata).review,
      stars: numberInRange(1, 5),
      host_id: numberInRange(1, userdata.length),
      reviewer_id: numberInRange(1, userdata.length)
    };
  });
};

//500
const createGuestReviews = (num) => {
  return Array(num).fill(null).map((dp, idx) => {
    return {
      tagline: pickOne(reviewdata).buzzword.toUpperCase() + pickOne(reviewdata).tagline,
      review_text: pickOne(reviewdata).review,
      stars: numberInRange(1, 5),
      guest_id: numberInRange(1, userdata.length),
      reviewer_id: numberInRange(1, userdata.length)
    };
  });
};

const users = createUsers();
const locations = createLocations();
const listings = createListings(500);
const bookings = createBookings(300);
const favorites = createFavorites(500);
const location_reviews = createLocationReviews(800);
const host_reviews = createHostReviews(600);
const guest_reviews = createGuestReviews(500);

module.exports = {
  users: users,
  locations: locations,
  listings: listings,
  bookings: bookings,
  favorites: favorites,
  location_reviews: location_reviews,
  host_reviews: host_reviews,
  guest_reviews: guest_reviews
}