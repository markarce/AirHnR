import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
  height: '100%',
  width: '100%',
  position: 'relative'
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: null,
      showInfo: false,
      locationSelectedOnMap: {}
    }
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      activeMarker: marker,
      showInfo: !this.state.showInfo,
      locationSelectedOnMap: props.listing
    });
  }
  render() {
    let markers = this.props.listings.map((listing, i) => {
      return <Marker key={i} listing={listing} position={{lat: listing.lat, lng: listing.lon}} 
      onClick={this.onMarkerClick.bind(this)}/>
    });
    return (
        <Map google={this.props.google} zoom={12} style={style} 
        initialCenter={{lat: this.props.searchedLocation.lat, lng: this.props.searchedLocation.lon}}>
          {markers}
          <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showInfo}>
              <div>
                <h5>{this.state.locationSelectedOnMap.name}</h5>
                <p>{this.state.locationSelectedOnMap.address}</p>
                <p>{this.state.locationSelectedOnMap.star_rating}/5 star rating</p>
              </div>
          </InfoWindow>
        </Map>
      );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDmDsMe3Ggc4Tp35hWdoITOKa4vKLkVQrM')
})(MapContainer);