import React from 'react';
import { render } from 'react-dom';
import css from './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import ListingDetails from './components/listingDetails.jsx'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SearchResults from './components/SearchResults'
import Search from './components/Search.jsx'
import NavBar from './components/NavBar.jsx'
import data from '../../lib/dummyData.js';
import $ from 'jquery'
import Checkout from './components/Checkout.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Trips from './components/Trips.jsx'
import NavLogged from './components/NavLogged.jsx';
import moment from 'moment';
import FeaturedPlaces from './components/FeaturedPlaces.jsx';
import MainPage from './components/MainPage.jsx'

let bookingSampleData = {
  start_date: '01/01/2018',
  end_date: '04/01/2018',
  nights: 3,
  guest_id: 61
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      query: '',
      results: [],
      listing: {},
      mapCenter: {
        latitude: 37.774929,
        longitude: -122.419416
      },
      startDate: moment(),
      endDate: moment().add(7, 'days'),
      guests: null,
      user: null
    };
    this.searchTerm = this.searchTerm.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleListingClick = this.handleListingClick.bind(this);
    this._triggerViewChange = this._triggerViewChange.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.userLogOut = this.userLogOut.bind(this);
    this.getSimpleDate = this.getSimpleDate.bind(this);
    this.login = this.login.bind(this);
    this.handleMapDrag = this.handleMapDrag.bind(this);
  }

  getSimpleDate (dateObj) {
    const date = new Date(dateObj);
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + date;
    }
    return `${year.toString()}-${month.toString()}-${day.toString()}`
  }

  getSimpleDate (dateObj) {
    const date = new Date(dateObj);
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + date;
    }
    return `${year.toString()}-${month.toString()}-${day.toString()}`
  }

  searchTerm(term) {
    this.setState({ query: term });
  };

  updateGuests (guests) {
    this.setState({
      guests: guests
    });
  };

  handleTripClick () {
    this.setState({
      view: 'trips'
    });
  }

  handleListingClick(listingID) {
    // called when a list item is clicked on.
    fetch(`/api/listings/${listingID}`)//, options)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        listing: json,
        view: 'listingDetails'
      })
    }).catch(err => console.log(err));
  };

  handleSearchClick(q) {
    //called from search bar, submits a search request for locations near searched area
    const options = {
      method: 'GET',
      contentType: "application/json",
      mode: 'cors',
      cache: 'default'
    }

    var startDate = null;
    var endDate = null;
    if (this.state.startDate) {
      startDate = this.getSimpleDate(this.state.startDate._d);
    }
    if (this.state.endDate) {
      endDate = this.getSimpleDate(this.state.endDate._d);
    }
    console.log('startDate', startDate);
    console.log('endDate', endDate);
    fetch(`/api/listings?q=${q || this.state.query}&start=${startDate}&end=${endDate}`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('here', json)
        this.setState({
          results: json.listings,
          mapCenter: json.mapCenter,
          view: 'searchResults'
        });
      }).catch(err => console.log(err));
  };
  
  handleMapDrag(latitude, longitude, zoom) {
    fetch(`/api/markings`, {
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      method: 'POST',
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
        zoom: zoom
      })
    }).then(response => response.json())
      .then(json => {
        this.setState({
          results: json.listings,
          mapCenter: {
            latitude: latitude,
            longitude: longitude
          }
        });
      }).catch(err => console.log(err));
  };

  handleBookingClick() {
    this.setState({
      view: 'checkout'
    });
  };

  userLoggedIn(userData) {
    this.setState({
      user: userData
    });
    // console.log('user', userData);
  }
  userLogOut() {
    this.setState({
      user: null
    });
  }

  login(email, password, cb) {
    const options = { method: 'POST',
      headers: {      
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({user_email: email, user_password: password})
    };

    fetch('/login', options)
    .then((response) => {
      if(!response.ok) return console.log('ERROR IN LOGIN', response);
      return response.json();
    }).then((resObject) => {
      if(resObject.error) {
        cb(resObject.error, true);
      } else {
        cb(null, false);
        this.userLoggedIn(resObject);
      }
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }

  render() {
    const currentView = this.state.view;
    let showPage = null;
    if (currentView === 'searchResults') {
      showPage = 
        <SearchResults
          results={this.state.results}
          handleListingClick={this.handleListingClick}
          mapCenter={this.state.mapCenter}
          handleMapDrag={this.handleMapDrag}
        />;
    } else if (currentView === 'listingDetails') {
      showPage =
        <ListingDetails
          updateGuests={this.updateGuests.bind(this)}
          handleBookingClick={this.handleBookingClick.bind(this)}
          booking={bookingSampleData} listing={this.state.listing}
        />;
    } else if (currentView === 'checkout') {
      showPage =
        <Checkout
          guests={this.state.guests}
          updateGuests={this.updateGuests.bind(this)}
          booking={bookingSampleData}
          listing={this.state.listing}
          user={this.state.user}
        />
    } else if(currentView === 'createAccount') {
      showPage =
        <CreateAccount
          triggerView={this._triggerViewChange}
          login={this.login}
        />
    } else if (currentView === 'trips') {
      showPage = <Trips user={this.state.user} />
    } else {
      showPage = <MainPage />
    }
    return (
      <div>
        <div>
          <NavBar 
            triggerView={this._triggerViewChange}
            userLoggedIn={this.userLoggedIn} 
            isUserLoggedIn={this.state.user ? true : false}
            userLogOut={this.userLogOut}
            user={this.state.user}
            login={this.login}
          />
        </div>
          <Search
            searchTerm={this.searchTerm}
            handleSearchClick={this.handleSearchClick}
          />
        <br />
        <div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            onClose={this.handleSearchClick}
          />
        </div>
        <br/>
        <div>
          {showPage}
        </div>
        <FeaturedPlaces goToLocation={this.handleSearchClick}/>
      </div>
    );
  };

  _triggerViewChange(requestedView) {
    this.setState({
      view: requestedView
    });
  };
};

render(<App />, document.getElementById('app'));
