import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import css from './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import data from '../../../lib/dummyData.js'

class searchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      fakeResults: data.testSearchResults
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleListingClick(event.target.value)
  }

  render() {
    const resultsList = fakeResults.map((listing) => <li 
      key={listing.id.toString()}
      image={image_url}
      name={listing.name} 
      price={listing.price}
      reviewsCount={reviews_count}
      starRating={star_rating}
      roomType={room_type}
      beds={beds}
      onClick={this.props.handleListingClick}
      ></li>);

    return (
       <div>
        <ul>
          {resultsList}
       </ul>
      
      </div>
    )
  }
}

export default searchResults;