import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import css from '../styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import data from '../../../lib/dummyData.js';
import SearchResult from './SearchResult.jsx'
import Grid from 'material-ui/Grid';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeResults: data.testSearchResults
    }
    this.handleListingClick = this.handleListingClick.bind(this);
  }

  handleListingClick(listingID) {
    this.props.handleListingClick(listingID);
  }

  render() {
    console.log('state', this.state);

    return (
      <Grid container={true} spacing={16}>
        { this.state.fakeResults.map(listing => (
          <Grid item>
            <SearchResult 
              // item={true}
              key={listing.id}
              id={listing.id}
              roomtype={listing.room_type}
              beds={listing.beds}
              name={listing.name}
              price={listing.price}
              rating={listing.star_rating}
              image={listing.image_url}
              handleClick={this.handleListingClick}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default SearchResults;