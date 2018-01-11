import React from 'react';
import ArrowForward from 'material-ui-icons/ArrowForward'
import BookingGuest from './BookingGuest';

class Booking extends React.Component {
  constructor (props) {
    super(props);
  }

  renderRating () {
    if (this.props.listing.star_rating === 5) {
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
    } else if (this.props.listing.star_rating === 4) {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    } else if (this.props.listing.star_rating === 3) {
      return (
        <div className='booking-rating-img'>
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <img src='https://content.mycutegraphics.com/graphics/star/blue-rounded-corner-star.png' />
          <span className='booking-reviewCount'>{this.props.listing.reviews_count}</span>
        </div>
      )
    } 
  }
<<<<<<< HEAD

  renderBookingButton () {
    if (this.props.button) {
      return (
        <div className='booking-button'>
          <button>Book</button>
        </div>
      )
    }
  }
=======
>>>>>>> completed booking feature
              
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
            <span>{this.props.listing.start_date}</span>
            <span className='icon-arrow-forward'><ArrowForward /></span>
            <span>{this.props.listing.end_date}</span>
        </div>

        <div className='booking-guests'>
          <BookingGuest maxGuests={this.props.listing.max_guests}/>
        </div>

        <div className='booking-subtotal'>
          <span className='booking-item'>{`$${this.props.listing.price} x ${this.props.listing.nights} nights`}</span>
          <span className='booking-item-price'>{`$${this.props.listing.price * this.props.listing.nights}`}</span>
        </div>

        <div className='booking-service-fee'>
          <span className='booking-item'>Service fee</span>
          <span className='booking-item-price'>{`$${this.props.listing.service_fee}`}</span>
        </div>

        <div className='booking-tax'>
          <span className='booking-item'>Occupancy Taxes</span>
          <span className='booking-item-price'>{`$${Math.round(0.085 * this.props.listing.price * this.props.listing.nights)}`}</span>
        </div>

        <div className='booking-total'>
          <span className='booking-item'>Total</span>
          <span className='booking-item-price'>{`$${Math.round(1.085 * this.props.listing.price * this.props.listing.nights + this.props.listing.service_fee)}`}</span>
        </div>
<<<<<<< HEAD
        
        {this.renderBookingButton()}
=======

        <div className='booking-button'>
          <button>Book</button>
        </div>
>>>>>>> completed booking feature

      </div>
    )
  }
} 

export default Booking;