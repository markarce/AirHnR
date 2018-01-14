import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import StripeCheckout from 'react-stripe-checkout';
import key from '../stripe_key';
import Booking from './Booking';
import Confirmation from './Confirmation.jsx'

const styles = theme => ({
  input: {
    display: 'none',
  },
  signInAlert: {
    color: 'red',
    textAlign: 'center',
    marginTop: '40px'
  }
});

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  createBooking () {
    const bookingData = {
      price: this.props.listing.price,
      fee_service: this.props.listing.fee_service,
      fee_cleaning: this.props.listing.fee_cleaning,
      tax: Math.round(0.085 * this.props.listing.price * this.props.booking.nights),
      total: Math.round(1.085 * this.props.listing.price * this.props.booking.nights + this.props.listing.fee_service),
      start_date: this.props.booking.start_date,
      end_date: this.props.booking.end_date,
      number_of_nights: this.props.booking.nights,
      num_guests: this.props.guests,
      listing_id: this.props.listing.id,
      location_id: this.props.listing.location_id,
      guest_id: this.props.user.id,
      host_id: this.props.listing.host_id
    };

    return bookingData;
  }

  onConfirm(data) {
    const options = { method: 'POST',
      headers: {      
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(data)
    };

    fetch('/api/bookings', options)
    .then((response) => {
      if(!response.ok) return console.log('ERROR POSTING TO BOOKINGS', response);
      console.log('POST TO BOOKINGS SUCCESSFULL');
      console.log('booking', data);
      this.props.triggerView("confirmation");
      let l = this.props.listing;
      this.props.sendConfirmationEmail(l.address_street, 
        l.address_city, l.address_region, l.address_postal_code, this.props.guests,
        Math.round(1.085 * this.props.listing.price * this.props.booking.nights + this.props.listing.fee_service))
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }

  renderCancellation () {
    if (this.props.listing.cancellation) {
      return (
        <div>
          <h5>Cancellation Policy: Flexible</h5>
          <p>Cancel up to 2 days before check in and get a full refund (minus service fees). Cancel within 2 days of your trip and the first night is non-refundable, but 50% of the cost for the remaining nights will be refunded.</p>
        </div>
      );
    } else {
      return (
        <div>
          <h5>Cancellation Policy: Strict</h5>
          <p>Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.</p>
        </div>
      );          
    }
  }

  render() {
    let checkoutButton = null;
    if(this.props.isUserLoggedIn) {
      checkoutButton = (<StripeCheckout
        name={this.props.listing.name}
        description="Payment description"
        amount={Math.round(1.085 * this.props.listing.price * this.props.booking.nights + this.props.listing.fee_service)*100}
        token={() => this.onConfirm(this.createBooking())}
        currency="USD"
        stripeKey={key}
      />);
    } else {
      checkoutButton = (<h5 style={styles().signInAlert}>Please sign in to confirm your purchase</h5>);
    }

    return (
      <div className="checkout">
        <div className="details">
          <header>
            <h2>Confirm and Pay</h2>
          </header>
          <div className="payment">
            <div>
            </div>
          </div>
          <div className="cancellation-policy">
            {this.renderCancellation()}
            {checkoutButton}
          </div>
        </div>
        <div className="overview">
              <Booking guests={this.props.guests} updateGuests={this.props.updateGuests} listing={this.props.listing} booking={this.props.booking} button={false}/>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(Checkout);