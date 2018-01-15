import React from 'react';
import Search from './Search.jsx';
import FeaturedPlaces from './FeaturedPlaces.jsx'

const styles = {
  text: {
    fontSize: 'calc(0.5vw + 42px)',
    lineHeight: 'calc(0.7vw + 48px)',
    color: '#FF5A5F',
    fontWeight: 700,
  },
  description: {
    fontSize: 'calc(0.5vw + 42px)',
    lineHeight: 'calc(0.7vw + 48px)',
  },
}
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className='mainpage-wrapper'>
        <div className="main-page-text">
          <span style={styles.text}>Airhnr</span>
          <p style={styles.description}>Book unique homes and experiences all over the world.</p>
        </div>
        <div className='main-page-search'>
          <Search isMainPage={true} handleSearchClick={this.props.goToLocation}/>
        </div>
        <div className='mainpage-featured-places'>
          <FeaturedPlaces goToLocation={this.props.goToLocation} />
        </div>
      </div>
    );
  };
};

export default MainPage;