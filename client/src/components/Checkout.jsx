import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import StripeCheckout from 'react-stripe-checkout';
import key from '../stripe_key';
import Booking from './Booking';

let fakeDataSent = {
  price: 100.0,
  feeService: 10.0,
  feeCleaning: 15.0,
  tax: 7.50,
  startDate: '01/01/2018',
  endDate: '02/02/2018',
  numberOfNights: 4,
  numberOfGuests: 2,
  listingId: 10,
  locationId: 10,
  guestId: 109593,
  hostId: 1000494
};

let listingSampleData = {
  start_date: '01/01/2018',
  end_date: '04/01/2018',
  price: 299,
  star_rating: 5,
  reviews_count: 32,
  max_guests: 2,
  nights: 3,
  service_fee: 20,
  tax: 0.1
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Checkout extends React.Component {

  onConfirm() {
    const options = { method: 'POST',
      headers: {      
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(fakeDataSent)
    };

    fetch('/api/bookings', options)
    .then((response) => {
      if(!response.ok) return console.log('ERROR POSTING TO BOOKINGS', response);
      console.log('POST TO BOOKINGS SUCCESSFULL');
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }
  render() {
    const { classes } = this.props;
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
            <h5>Cancellation Policy: Strict</h5>
            <p>Cancel up to 7 days before check in and get a 
              50% refund. Cancel within 7 days of your trip and the reservation is
              non-refundable. Service fees are refunded when cancellation
              happens before check in and within 48 hours of booking</p>
            <p>I agree to the House Rules, Cancellation Policy, and to the guest
              Refund Policy.
            </p>
            <StripeCheckout
                  name="Airbnb Place Name"
                  description="Payment description"
                  amount={120.0}
                  token={this.onConfirm.bind(this)}
                  currency="USD"
                  stripeKey={key}
              />
          </div>
        </div>
        <div className="overview">
              <Booking listing={listingSampleData} button={false}/>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(Checkout);