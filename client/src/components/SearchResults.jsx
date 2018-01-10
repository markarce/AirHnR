import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import css from '../styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import data from '../../../lib/dummyData.js';
import SearchResult from './SearchResult.jsx'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeResults: data.testSearchResults
    }
  }

  render() {
    console.log('state', this.state);

    return (
      <div>
        { this.state.fakeResults.map(listing => (
          <SearchResult 
            key={listing.id}
            id={listing.id}
            roomtype={listing.room_type}
            beds={listing.beds}
            name={listing.name}
            price={listing.price}
            rating={listing.star_rating}
            image={listing.image_url}
          />
        ))}
      </div>
    );
  }
}

export default SearchResults;