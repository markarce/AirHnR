import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import css from '../styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import SearchResult from './SearchResult.jsx'
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import MapContainer from './MapContainer';
import $ from 'jquery';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.node = '';
    this.handleListingClick = this.handleListingClick.bind(this);
  }

  componentDidMount() {
    this._setMapPosition();
  }

  handleListingClick(listingID) {
    this.props.handleListingClick(listingID);
  }

  render() {
    var listings = this.props.results;
    return (
      <div className="listing-details">
        <div className="listings">
          <Grid container spacing={16}>
            { listings.map(listing => (
              <Grid item key={listing.id}>
                <SearchResult 
                  key={listing.id}
                  id={listing.id}
                  roomtype={listing.room_type}
                  beds={listing.beds}
                  name={listing.name}
                  price={listing.price}
                  rating={listing.average_stars}
                  image={listing.image_url}
                  handleClick={this.handleListingClick}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="map-container" ref={node => this.node = node}>
          <MapContainer 
            listings={listings} 
            handleMapDrag={this.props.handleMapDrag} 
            searchedLocation={this.props.mapCenter}
          />
        </div>
      </div>
    );
  }

  _setMapPosition() {
    let divNodes = $(this.node).find('div');
    $(divNodes[0]).css({
      width: '100%',
      height: '100%'
    });
    $(divNodes[1]).css({
      position: 'relative'
    });
  }
}

export default /*withStyles(styles)(*/SearchResults/*)*/;