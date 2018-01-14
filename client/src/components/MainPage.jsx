import React from 'react';
import Search from './Search.jsx';
import FeaturedPlaces from './FeaturedPlaces.jsx'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <span>Airhnr</span>
        <div>Book unique homes and experiences all over the world.</div>
        <Search />
        <FeaturedPlaces goToLocation={this.props.goToLocation} />
      </div>
    );
  };
};

export default MainPage;