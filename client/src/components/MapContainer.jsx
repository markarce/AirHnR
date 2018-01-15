import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Stars from './Stars';

const style = {
  height: '1000px',
  width: '100%',
  position: 'relative'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: null,
      showInfo: false,
      locationSelectedOnMap: {}
    }
    this.centerMoved = this.centerMoved.bind(this);
    this.setZoomHandler = this.setZoomHandler.bind(this);
  };

  centerMoved(mapProps, map) {
    this.props.handleMapDrag(map.center.lat(), map.center.lng(), map.zoom)
  };

  setZoomHandler(mapProps, map) {
    console.log(map, mapProps)
    this.props.google.maps.event.addListener(map, 'zoom_changed', () => {
      this.centerMoved(mapProps, map);
    });
  };

  onMarkerClick(props, marker, e) {
    if (this.state.locationSelectedOnMap === props.listing) {
      this.setState({
        showInfo: false,
      });
    }
    else {
      this.setState({
        activeMarker: marker,
        locationSelectedOnMap: props.listing,
        showInfo: true
      });
    }
  };

  render() {
    console.log(GoogleApiWrapper)
    let markers = this.props.listings.map((listing, i) => {
      return (
        <Marker 
          key={i} 
          listing={listing} 
          position={{
            lat: listing.latitude, 
            lng: listing.longitude
          }}
          onClick={this.onMarkerClick.bind(this)}
        />
      )
    });
    return (
      <Map google={this.props.google} 
        zoom={13} 
        style={style} 
        // centerAroundCurrentLocation={true}
        onDragend={this.centerMoved}
        onClick={() => this.setState({showInfo: false})}
        onReady={this.setZoomHandler}
        // center={{
        initialCenter={{
          lat: this.props.searchedLocation.latitude,
          lng: this.props.searchedLocation.longitude
        }}
      >
        {markers}
        <InfoWindow 
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showInfo}
        >
          <div>
            <h5>{this.state.locationSelectedOnMap.name}</h5>
            <p>{this.state.locationSelectedOnMap.address_street}</p>
            <Stars
              rating={this.state.locationSelectedOnMap.average_stars} 
              offset={0.25}
              total={5}
            />
          </div>
        </InfoWindow>
      </Map>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDmDsMe3Ggc4Tp35hWdoITOKa4vKLkVQrM')
})(MapContainer);