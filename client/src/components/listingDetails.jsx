import React from 'react';
import ListingNav from './listingNav.jsx';
import Button from 'material-ui/Button';
import _ from 'lodash';
import Booking from './Booking.jsx'

let listingSampleData = {
  start_date: '01/01/2018',
  end_date: '04/04/2018',
  price: 299,
  star_rating: 5,
  reviews_count: 32,
  max_guests: 2,
  nights: 3,
  service_fee: 20,
  tax: 0.1
};

class ListingDetails extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showDescription: false
    };
  }

  renderDescription () {
    if (!this.state.showDescription) {
      return (
        <div className='listing-description'>
          <p>{this.props.listing.tagline}</p>
          <Button onClick={()=> this.setState({showDescription: true})}>{`Read more about the space`}</Button>
        </div>
      );
    } else {
      return (
        <div className='listing-description'>
          <p>{this.props.listing.description}</p>
          <Button onClick={()=> this.setState({showDescription: false})}>Hide</Button>
        </div>
      );
    }
  }

  renderAmenities () {
    return _.map(this.props.listing.amenities, (val, key) => {
      if (val) {
        return <li key={key} className='amenity'>{key}</li>
      } else {
        return <li key={key} className='amenity strike'>{key}</li>  
      }
    });
  }

  renderHouseRules () {
    return _.map(this.props.listing.houseRules, (val, key) => {
      if (val) {
        if (key === 'checkIn') {
          return <li key={key}>{`Check-in at ${val}`}</li>
        } else if (key === 'checkOut') {
          return <li key={key}>{`Check-out by ${val}`}</li>
        } else if (key === 'pets') {
          return <li key={key}>Suitable for pets</li>
        } else {
          return <li key={key}>No Smoking</li>
        }
      } else {
        if (key === 'pets') {
          return <li key={key}>Not suitable for pets</li>
        } else {
          return <li key={key}>Smoking Allowed</li>
        }
      }
    });
  }

  renderCancellation () {
    if (this.props.listing.cancellation) {
      return (
        <div>
          <p>Flexible</p>
          <p>Cancel up to 2 days before check in and get a full refund (minus service fees). Cancel within 2 days of your trip and the first night is non-refundable, but 50% of the cost for the remaining nights will be refunded.</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Strick</p>
          <p>Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.</p>
        </div>
      );          
    }
  }

  renderRating () {
    if (this.props.listing.star_rating === 5) {
      return (
        <div className='listing-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
        </div>
      )
    } else if (this.props.listing.star_rating === 4) {
      return (
        <div className='listing-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
        </div>
      )
    } else if (this.props.listing.star_rating === 3) {
      return (
        <div className='listing-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
        </div>
      )
    } 
  }

  render () {
    return (
      <div className='listing-wrapper'>
        <div className='listing-booking'>
          <Booking listing={listingSampleData} button={true}/>
        </div>
        <div className='listing-img' >
          <img src={this.props.listing.image_url}/> 
        </div>
        {/* <div className='listing-nav'>
          <a href='#'>Overview</a>
          <a href='#'>Reviews</a>
          <a href='#'>The Host</a>
          <a href='#'>Location</a>
        </div> */}
        <ListingNav />
        {/*<Booking listing={listingSampleData}/>*/}
        <div className='line-break1'></div>
        <div className='listing-title'>
          <h1>{this.props.listing.name}</h1>
        </div>
        <div className='listing-type'>
          <p>{`${this.props.listing.room_type} · ${this.props.listing.city}`}</p>
          <p>{`Hosted by ${this.props.listing.host.name}`}</p>
        </div>
        <div className='listing-space'> 
          <span className='listing-space-detail'>👯</span> 
          <span className='listing-space-detail'>{`${this.props.listing.maxGuests} guests`}</span>
          <span className='listing-space-detail'>🛌 </span> 
          <span className='listing-space-detail'>{`${this.props.listing.beds} bed`}</span>
          <span className='listing-space-detail'>🛀 </span> 
          <span className='listing-space-detail'>{`${this.props.listing.bathrooms} bathrooms`}</span>  
        </div> 
        {this.renderDescription()}
        <div className='line-break2'></div>
        <div className='listing-amenities'>
          <h3>Amenitiess</h3>
          <ul>
            {this.renderAmenities()}
          </ul>
        </div>
        <div className='line-break3'></div>
        <div className='listing-houserules'>
          <h3>House Rules</h3>
          <ul>
            {this.renderHouseRules()}
          </ul>
        </div>
        <div className='line-break4'></div>
        <div className='listing-cancellation'>
          <h3>Cancellations</h3>
          {this.renderCancellation()}
        </div>
        <div className='line-break5'></div>
        <div className='listing-rating'>
          <h2>{`${this.props.listing.reviews_count} Reviews`}</h2>
        </div>
        {this.renderRating()}
        <div className='line-break6'></div>
        <div className='listing-host'>
          <h2>{`Hosted By ${this.props.listing.host.name}`}</h2>
          <p>San Francisco, California, United States</p>
          <p>Joined in May 2012</p>
        </div>
        <div className='listing-host-img'>
          <img src='https://a0.muscache.com/defaults/user_pic-225x225.png?v=3' />
        </div>
      </div>
    )
  }
}

export default ListingDetails;
