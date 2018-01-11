var testSearchResults = [
  {
    "beds": 18,
    "address": "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    "id": 867541,
    "name": "Really, really white house",
    "price": 150,
    "reviews_count": 500,
    "room_type": "Single Room",
    "star_rating": 3.2,
    "image_url": "https://timedotcom.files.wordpress.com/2016/08/whitehousevalue-re-97765250.jpg",
    "lat": 38.896158,
    "lon": -77.037139
  },
  {
    "beds": 4,
    "address": "700 Steiner St, San Francisco, CA 94117, USA",
    "id": 854623,
    "name": "Beautiful Four Bedroom House",
    "price": 200,
    "reviews_count": 70,
    "room_type": "Entire Place",
    "star_rating": 4.9,
    "image_url": "http://lh6.ggpht.com/-cXg1IbQWCOY/UkQUVtcrfhI/AAAAAAAAs4c/bhH-b6HHDTE/painted-ladies-5%25255B5%25255D.jpg?imgmax=800",
    "lat": 37.7762593,
    "lon": -122.432758
  },
  {
    "beds": 2,
    "address": "680 Mission St, San Francisco, CA 94105, USA",
    "id": 12345,
    "name": "Beautiful One Bedroom Apartment",
    "price": 90,
    "reviews_count": 120,
    "room_type": "Entire Place",
    "star_rating": 4.7,
    "image_url": "https://a0.muscache.com/im/pictures/6451545/08a2d47b_original.jpg?aki_policy=xx_large",
    "lat": 37.78,
    "lon": -122.40
  },
  {
    "beds": 4,
    "address": "1725 Fulton St, San Francisco, CA 94117, USA",
    "id": 12346,
    "name": "Beautiful Four Bedroom House",
    "price": 150,
    "reviews_count": 89,
    "room_type": "Entire Place",
    "star_rating": 4.2,
    "image_url": "https://a0.muscache.com/im/pictures/ca6fad28-709a-465f-8ffc-c1d784c60f3b.jpg?aki_policy=xx_large",
    "lat": 37.77,
    "lon": -122.44
  },
  {
    "beds": 2,
    "address": '37171 Sycamore St, Newark, CA 94560, USA',
    "id": 285733,
    "name": 'Well-furnished apt in Newark',
    "price": 80,
    "reviews_count": 12,
    "room_type": 'apartment',
    "star_rating": 4,
    "image_url": 'http://cdn.sheamediaservices.com/photos/ws_3/sycamore-bay-slider-5_large.jpg',
    "lat": 37.527474,
    "lon": -122.035255
  },
  {
    "beds": 2,
    "address": '333 O\'Farrell St, San Francisco, CA 94102, USA',
    "id": 411709,
    "name": 'Hilton San Francisco Union Square',
    "price": 164,
    "reviews_count": 12780,
    "room_type": 'hotel',
    "star_rating": 4.1,
    "image_url": 'http://www3.hilton.com/resources/media/hi/SFOFHHH/en_US/img/shared/full_page_image_gallery/main/HH_poolvwdeck01_36_1270x560_FitToBoxSmallDimension_Center.jpg',
    "lat": 37.78590229749053,
    "lon": 122.4108374118805
  },
  {
    "beds": 1,
    "address": '360 10th st, San Francisco, CA 94102, USA',
    "id": 139857,
    "name": 'Beautiful SOMA Condo/Moscone/Downtown',
    "price": 300,
    "reviews_count": 32,
    "room_type": 'Entire loft',
    "star_rating": 5,
    "image_url": 'https://a0.muscache.com/im/pictures/7ce1579c-4c8b-424c-99cd-23cab046adce.jpg?aki_policy=xx_large'
  },
  {
    "beds": 8,
    "address": 'Jalan Pantai Kuta, Banjar Pande Mas, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
    "id": 187468,
    "name": 'Amazing 8 Bedroom, Seminyak-Oberoi',
    "price": 1900,
    "reviews_count": 24,
    "room_type": 'Entire villa',
    "star_rating": 5,
    "image_url": 'https://a0.muscache.com/im/pictures/be366b07-1ab8-4456-90c4-a09d5588e4fe.jpg?aki_policy=xx_large'
  },
];

// Details item return

var testDetailItems = [
  {
    "beds": 18,
    "address": "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    "id": 867541,
    "name": "Really, really white house",
    "price": 150,
    "reviews_count": 500,
    "room_type": "Single Room",
    "star_rating": 3.2,
    "image_url": "https://timedotcom.files.wordpress.com/2016/08/whitehousevalue-re-97765250.jpg",
    "lat": 38.896158,
    "lon": -77.037139,
    "bathrooms": 1,
    "maxGuests": 2,
    "tagline": "The summer white house",
    "description": "It's no Mar-a-lago, but it's pretty great. The White House is the official residence and workplace of the President of the United States. It is located at 1600 Pennsylvania Avenue NW in Washington, D.C., and has been the residence of every U.S. president since John Adams in 1800. ",
    "amenities": {
      "wifi": true,
      "kitchen": true,
      "hotTub": true,
      "pool": true,
      "goldToilet": true
    },
    "houseRules": {
      "pets": true,
      "smoking": false,
      "checkIn": "01/20/2017",
      "checkOut": "01/19/2021"
    },
    "host": {
      "id": 45,
      "name": "Donald"
    }
  },
  {
    "beds": 4,
    "address": "700 Steiner St, San Francisco, CA 94117, USA",
    "id": 854623,
    "name": "Beautiful Four Bedroom House",
    "price": 200,
    "reviews_count": 70,
    "room_type": "Entire Place",
    "star_rating": 4.9,
    "image_url": "http://lh6.ggpht.com/-cXg1IbQWCOY/UkQUVtcrfhI/AAAAAAAAs4c/bhH-b6HHDTE/painted-ladies-5%25255B5%25255D.jpg?imgmax=800",
    "lat": 37.7762593,
    "lon": -122.432758,
    "bathrooms": 3,
    "maxGuests": 10,
    "tagline": "Really full house",
    "description": "The famous Painted Ladies of San Francisco are a row of colorful Victorian houses located at 710–720 Steiner Street, across from Alamo Square park, in San Francisco. Built between 1892 and 1896, these Victorian-style houses are one of the thousands built in San Francisco during its booming growth at the end of the nineteenth century.",
    "amenities": {
      "wifi": true,
      "kitchen": true,
      "hotTub": false
    },
    "houseRules": {
      "pets": false,
      "smoking": false,
      "checkIn": "01/30/2018",
      "checkOut": "01/30/2019"
    },
    "host": {
      "id": 6,
      "name": "Bob"
    }
  },
  {
     "beds": 2,
     "address": "680 Mission Street, San Francisco CA 94105",
     "id": 12345,
     "name": "Beautiful One Bedroom Apartment",
     "price": 90,
     "reviews_count": 120,
     "room_type": "Entire Place",
     "star_rating": 4.7,
     "image_url": "https://a0.muscache.com/im/pictures/6451545/08a2d47b_original.jpg?aki_policy=xx_large",
     "lat": 37.78,
     "lon": -122.40,
     "bathrooms": 1,
     "maxGuests": 2,
     "tagline": "1 BD apartment at the center of San Francisco",
     "description": "Close to Union Square, Nob Hill, Chinatown, and the cable car, this hotel suite offers a quintessential San Francisco experience. Your room at the Worldmark San Francisco is well equipped for exploring the city with a queen size bed, full bathroom, and mini-fridge to store leftovers from the areas many great restaurants.\nThe workout room means you don't have to leave your routine when you're away from home. The main floor has a free laundry room.",
     "amenities": {
         "wifi": true,
         "kitchen": true,
         "hotTub": false
     },
     "houseRules": {
       "pets": true,
       "smoking": false,
       "checkIn": "01/20/2017",
       "checkOut": "01/30/2017"
     },
     "host": {
       "id": 1,
       "name": "Santiago"
    }
  },
  {
    "beds": 4,
    "address": "1725 Fulton St, San Francisco, CA 94117, USA",
    "id": 12346,
    "name": "Beautiful Four Bedroom House",
    "price": 150,
    "reviews_count": 89,
    "room_type": "Entire Place",
    "star_rating": 4.2,
    "image_url": "https://a0.muscache.com/im/pictures/ca6fad28-709a-465f-8ffc-c1d784c60f3b.jpg?aki_policy=xx_large",
    "lat": 37.77,
    "lon": -122.44,
    "bathrooms": 2,
     "maxGuests": 4,
     "tagline": "2 BD apartment near Golden Gate Park",
     "description": "Close to Union Square, Nob Hill, Chinatown, and the cable car, this hotel suite offers a quintessential San Francisco experience. Your room at the Worldmark San Francisco is well equipped for exploring the city with a queen size bed, full bathroom, and mini-fridge to store leftovers from the areas many great restaurants.\nThe workout room means you don't have to leave your routine when you're away from home. The main floor has a free laundry room.",
     "amenities": {
         "wifi": true,
         "kitchen": true,
         "hotTub": true
     },
     "houseRules": {
       "pets": true,
       "smoking": false,
       "checkIn": "01/20/2018",
       "checkOut": "01/30/2018"
     },

     "host": {
       "id": 105,
       "name": "James"
    }
  },
  {
    "beds": 2,
    "address": '37171 Sycamore St, Newark, CA 94560 USA',
    "id": 285733,
    "name": 'Well-furnished apt in Newark, close to downtown',
    "price": 70,
    "reviews_count": 12,
    "room_type": 'apartment',
    "star_rating": 4,
    "image_url": 'http://cdn.sheamediaservices.com/photos/ws_3/sycamore-bay-slider-5_large.jpg',
    "lat": 37.527474,
    "lon": -122.035255,
    "bathrooms": 1,
    "maxGuests": 4,
    "tagline": 'Come stay at this beautiful Sycamore Bay apartment, newly renovated and with plenty of room to stretch out',
    "description": 'Situated just minutes from the bay, Sycamore Bay is convenient to the Peninsula via the Dumbarton Bridge or just a short drive to the employment mecca of Silicon Valley. When you drive through the gates of this Newark apartment community, you’ll have access to all the finest amenities. Meet your neighbors at a Super Bowl party in the resident lounge, BBQ with friends at the picnic area while the youngsters play on the playground or stop by the Wi-Fi bar to grab your email before heading out for a bite to eat just minutes away. Head over to the fitness center for a quick work out before cooling down with a quick dip in the pool. Whatever your fancy, you’ll find it here at Sycamore Bay apartments.',
    "amenities": {
        "wifi": true,
        "kitchen": true,
        "hotTub": true
    },
    "houseRules": {
      "pets": true,
      "smoking": false,
      "checkIn": '01/20/2018',
      "checkOut": '01/27/2018'
    },
    "host": { 
      "id": 297804,
      "name": 'Mark'
    }
  },
  {
    "beds": 2,
    "address": "333 O'Farrell St, San Francisco, CA 94102, USA",
    "id": 411709,
    "name": 'Hilton San Francisco Union Square',
    "price": 164,
    "reviews_count": 12780,
    "room_type": 'hotel',
    "star_rating": 4.1,
    "image_url": 'http://www3.hilton.com/resources/media/hi/SFOFHHH/en_US/img/shared/full_page_image_gallery/main/HH_poolvwdeck01_36_1270x560_FitToBoxSmallDimension_Center.jpg',
    "lat": 37.78590229749053,
    "lon": 122.4108374118805,
    "bathrooms": 1,
    "maxGuests": 4,
    "tagline": 'Sleek hotel with a rooftop bar & a pool',
    "description": 'Hilton San Francisco Union Square, located in the Theater District, puts you in walking distance to cable cars and Moscone Center and about 1 mile from Chinatown and Nob Hill. This historic three-tower hotel provides rooms with city views, Cityscape lounge on the 46th floor and an expansive ballroom, ideal for your next special event. Relax on our 16th floor pool deck.',
    "amenities": {
        "wifi": true,
        "kitchen": false,
        "hotTub": true
    },
    "houseRules": {
      "pets": false,
      "smoking": false,
      "checkIn": '01/13/2018',
      "checkOut": '01/15/2018'
    },
    "host": { 
      "id": 577812,
      "name": 'Hilton Hotels Inc'
    }
  },
  {
    "beds": 1,
    "address": '360 10th st, San Francisco, CA 94102, USA',
    "id": 139857,
    "name": 'Beautiful SOMA Condo/Moscone/Downtown',
    "price": 300,
    "reviews_count": 32,
    "room_type": 'Entire loft',
    "star_rating": 5,
    "image_url": 'https://a0.muscache.com/im/pictures/7ce1579c-4c8b-424c-99cd-23cab046adce.jpg?aki_policy=xx_large',
    "bathrooms": 2,
    "maxGuests": 2,
    "tagline": 'Enjoy your relaxation time from SF life in this newly renovated Dream House decorated with modern artwork and new furniture throughout, walk to EVERYTHING in Downtown / SOMA San Francisco!',
    "description": "Enjoy your relaxation time from SF life in this newly renovated Dream House decorated with modern artwork and new furniture throughout, walk to EVERYTHING in Downtown / SOMA San Francisco! The space A bright and beautiful designed home! The the living are is large with tall ceilings which brings in the sunshine accentuate the colors in the space. Towels and Linens are fresh and available for you. Cozy up on a beautiful bed and mattress. Easily work from home with a huge desk in living area ( High-Speed Wi-Fi Available)!",
    "amenities": {
      "wifi": true,
      "kitchen": true,
      "hotTub": false
    },
    "houseRules": {
      "pets": false,
      "smoking": false,
      "checkIn": '02/15/2018',
      "checkOut": '02/17/2018'
    },
    "cancellation": true,
    "host": {
      "id": 187246,
      "name": 'Lucas'
    }
  },
  {
    "beds": 8,
    "address": 'Jalan Pantai Kuta, Banjar Pande Mas, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
    "id": 187468,
    "name": 'Amazing 8 Bedroom, Seminyak-Oberoi',
    "price": 1900,
    "reviews_count": 24,
    "room_type": 'Entire villa',
    "star_rating": 5,
    "image_url": 'https://a0.muscache.com/im/pictures/be366b07-1ab8-4456-90c4-a09d5588e4fe.jpg?aki_policy=xx_large',
    "bathrooms": 10,
    "maxGuests": 12,
    "tagline": 'The villa is conveniently located in the heart of Seminyak’s exclusive Oberoi district',
    "description": "The villa is conveniently located in the heart of Seminyak's exclusive Oberoi district, and it combines the facilities of two adjoining villas. A 4 bedroom luxury villa and a 4 bedroom luxury villa share the same architecture, management, staff and facilities, but each comprising of their own swimming pool and may be enjoyed separately or together. Subject to 15.5% of taxes collect separately upon check in. The space: Set behind high walls topped with decorative teakwood panels, the Villa comprises a pair of interconnected double-storey pavilions facing a third pavilion across the swimming pool and garden, linked on both levels by a colonnaded walkway. The huge living and entertaining area occupies the entire ground level of the inter-connected pavilions. From here, an open staircase leads to the media room (which doubles as a guest bedroom) and onto a huge furnished terrace where sliding doors open onto two more guest bedrooms. A roof-garden walkway links to the facing pavilion which houses the master bedroom suite on the second level and two further guest bedrooms on the garden level.",
    "amenities": {
      "wifi": false,
      "kitchen": true,
      "hotTub": true,
    },
    "houseRules": {
      "pets": true,
      "smoking": true,
      "checkIn": '02/01/2018',
      "checkOut": '02/14/2018'
    },
    "cancellation": false,
    "host": {
      "id": 999872,
      "name": 'Shanty'
    }
  }
];

const data = {
  testSearchResults,
  testDetailItems
};

module.exports = {
  data: data
};