import React from 'react';
import ArrowForward from 'material-ui-icons/ArrowForward'
import BookingGuest from './BookingGuest';
import Login from './Login.jsx';

class Booking extends React.Component {
  constructor (props) {
    super(props);
  }

  renderRating () {
    let rating = Math.round(this.props.listing.average_stars);
    if (rating === 5) {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    } else if (rating === 4) {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    } else if (rating === 3) {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    } else if (rating === 2) {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    } else {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    }
  }

  renderBookingButton () {
    if (this.props.button) {
      return (
        <div className='booking-button'>
          {this.props.isUserLoggedIn ? 
            <button onClick={() => this.props.handleBookingClick()}>Book</button> : 
            <Login login={this.props.login} buttonTitle="Book"/>
          }
        </div>
      )
    }
  }
              
  render () {
    return (
      <div className='booking-container'>

        <div className='booking-price'>
          <span className='price-perNight'>{`$${this.props.listing.price}`}</span>
          <span className='perNight-text'>per night</span>
          {this.renderRating()}
        </div>

        <div className='booking-dates'>
          <h5>Dates</h5>
            <span>{this.props.booking.start_date}</span>
            <span className='icon-arrow-forward'><ArrowForward /></span>
            <span>{this.props.booking.end_date}</span>
        </div>

        <div className='booking-guests'>
          <BookingGuest guestsSelected={this.props.guests} updateGuests={this.props.updateGuests} maxGuests={this.props.listing.max_guests}/>
        </div>

        <div className='booking-subtotal'>
          <span className='booking-item'>{`$${this.props.listing.price} x ${this.props.booking.nights} nights`}</span>
          <span className='booking-item-price'>{`$${this.props.listing.price * this.props.booking.nights}`}</span>
        </div>

        <div className='booking-service-fee'>
          <span className='booking-item'>Service fee</span>
          <span className='booking-item-price'>{`$${this.props.listing.fee_service}`}</span>
        </div>

        <div className='booking-tax'>
          <span className='booking-item'>Occupancy Taxes</span>
          <span className='booking-item-price'>{`$${Math.round(0.085 * this.props.listing.price * this.props.booking.nights)}`}</span>
        </div>

        <div className='booking-total'>
          <span className='booking-item'>Total</span>
          <span className='booking-item-price'>{`$${Math.round(1.085 * this.props.listing.price * this.props.booking.nights + this.props.listing.fee_service)}`}</span>
        </div>
  
        {this.renderBookingButton()}

      </div>
    )
  }
} 

export default Booking;