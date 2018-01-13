import React from 'react';

const bookingData = {
  price: 100,
  fee_service: 40,
  fee_cleaning: 40,
  tax: 30,
  total: 370,
  start_date: '04/01/2018',
  end_date: '07/01/2018',
  number_of_nights: 3,
  num_guests: 3,
  address_city: "New York",
  name: 'Really, really white house',
  average_rating: 4.5,
  reviews: 20,
  image_url: "http://www3.hilton.com/resources/media/hi/SFOFHHH/en_US/img/shared/full_page_image_gallery/main/HH_poolvwdeck01_36_1270x560_FitToBoxSmallDimension_Center.jpg",
  avatar_url: "https://robohash.org/omnisatharum.png?size=50x50&set=set1",
};

const Trip = (props) => (
  <div>
    <img src={props.booking.image_url} />
    <img src={props.booking.avatar_url} />
    <h3>{props.booking.address_city}</h3>
    <p>{`${props.booking.start_date} - ${props.booking.end_date}`}</p>
    <p>{`${props.booking.num_guests} guests`}</p>
    <h4>{props.booking.name}</h4>
    <h4>View Receipt</h4>
    <h4>Send or Request Money</h4>
  </div>
)

export default Trip;