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
      startDate: null,
      endDate: null
    }
    this.searchTerm = this.searchTerm.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleListingClick = this.handleListingClick.bind(this);
    this._triggerViewChange = this._triggerViewChange.bind(this);
  }

  searchTerm(term) {
    this.setState({ query: term });
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

  handleSearchClick() {
    //called from search bar, submits a search request for locations near searched area
    const options = {
      method: 'GET',
      contentType: "application/json",
      mode: 'cors',
      cache: 'default'
    }
    fetch(`/api/listings?q=${this.state.query}`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('here', json)
        this.setState({
          results: json.listings,
          mapCenter: json.mapCenter,
          view: 'searchResults'
        });
      }).catch(err => console.log(err));
  }

  handleBookingClick () {
    this.setState({
      view: 'checkout'
    })
  }

  render() {
    const currentView = this.state.view;
    let showPage = null;
    if (currentView === 'searchResults') {
      showPage = <SearchResults results={this.state.results} handleListingClick={this.handleListingClick} mapCenter={this.state.mapCenter} />;
    } else if (currentView === 'listingDetails') {
      showPage = <ListingDetails handleBookingClick={this.handleBookingClick.bind(this)} listing={this.state.listing} />;
    } else if (currentView === 'checkout') {
      showPage = <Checkout />;
    } else if(currentView === 'createAccount') {
      showPage = <CreateAccount triggerView={this._triggerViewChange}/>
    }

    return (
      <div>
        <div>
          <NavBar triggerView={this._triggerViewChange}/>
        </div>
        <Search searchTerm={this.searchTerm} handleSearchClick={this.handleSearchClick}/>
        <br />
        <div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>
        <br/>
        <div>
          {showPage}
          <Login />
        </div>
      </div>
    );
  }

  _triggerViewChange(requestedView) {
    this.setState({
      view: requestedView
    });
  }
}

render(<App />, document.getElementById('app'));
