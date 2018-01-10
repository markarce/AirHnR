import React from 'react';
import { render } from 'react-dom';
import css from './styles/styles.css';
// import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';

import ListingDetails from './components/listingDetails.jsx'



import SearchResults from './components/SearchResults'
import Search from './components/Search.jsx'
import NavBar from './components/NavBar.jsx'
import $ from 'jquery'

var sampleData = {
  //added city and pool
  beds: 1,
  address: 'Jalan Pantai Kuta, Banjar Pande Mas, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
  city: 'San Francisco',
  id: Number,
  name: 'Beautiful SOMA Condo/Moscone/Downtown',
  price: 300,
  reviews_count: 32,
  room_type: 'Entire loft',
  star_rating: 5,
  image_url: 'https://a0.muscache.com/im/pictures/7ce1579c-4c8b-424c-99cd-23cab046adce.jpg?aki_policy=xx_large',

  bathrooms: 2,
  maxGuests: 2,
  tagline: 'Enjoy your relaxation time from SF life in this newly renovated Dream House decorated with modern artwork and new furniture throughout, walk to EVERYTHING in Downtown / SOMA San Francisco!',
  description: `Enjoy your relaxation time from SF life in this newly renovated Dream House decorated with modern artwork and new furniture throughout, walk to EVERYTHING in Downtown / SOMA San Francisco! The space A bright and beautiful designed home! The the living are is large with tall ceilings which brings in the sunshine accentuate the colors in the space. Towels and Linens are fresh and available for you. Cozy up on a beautiful bed and mattress. Easily work from home with a huge desk in living area ( High-Speed Wi-Fi Available)!`,
  amenities: {
    wifi: true,
    kitchen: true,
    hotTub: false,
    pool: true
  },
  houseRules: {
    pets: false,
    smoking: false,
    checkIn: '3pm',
    checkOut: '12pm',
  },
  cancellation: true,
  host: {
    id: Number,
    name: 'Lucas'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      query: '',
      results: []
    };
  }

  handleListingClick(listingID) {
    console.log(listingID + ' clicked in App');
    const options = {
      method: 'GET',
      contentType: "application/json",
      mode: 'cors',
      cache: 'default'
    }
    fetch(`/api/listing?id=${listingID}`, options)
      .then((response) => response.json())
      .then((listing) => {
        console.log(listing)
    })
  }

  render() {
    return (
      <div>

      <NavBar/>
      <div>
        <Search onClick={this.handleClickFunction}/>
      </div>
      <br/>
      <div>
        <SearchResults handleListingClick={this.handleListingClick}/>
      </div>
        <ListingDetails listing={sampleData}/>
      </div>
    );
  }

}

render(<App />, document.getElementById('app'));


