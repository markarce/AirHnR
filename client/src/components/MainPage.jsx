import React from 'react';
import Search from './Search.jsx';
import FeaturedPlaces from './FeaturedPlaces.jsx'

const styles = {
  text: {
    fontSize: 'calc(0.5vw + 42px)',
    lineHeight: 'calc(0.7vw + 48px)',
  },
  description: {
    fontSize: 'calc(0.5vw + 42px)',
    lineHeight: 'calc(0.7vw + 48px)',
    width: '45%'
  },
  container: {
    margin: '2% 60px'
  }
}
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <div className="main-page" style={styles.container}>
          <span style={styles.text}>Airhnr</span>
          <p style={styles.description}>Book unique homes and experiences all over the world.</p>
          <Search isMainPage={true} handleSearchClick={this.props.goToLocation}/>
        </div>
        <FeaturedPlaces goToLocation={this.props.goToLocation} />
      </div>
    );
  };
};

export default MainPage;