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
      <div className='main-container'>
        <span className='main-airHnR'>Airhnr</span>
        <div className='main-slogan'>Book unique homes and experiences all over the world.</div>
        <Search className='main-search' handleSearchClick={this.props.handleSearchClick}/>
        <FeaturedPlaces className='main-featured' goToLocation={this.props.handleSearchClick} />
      </div>
    );
  };
};

export default MainPage;