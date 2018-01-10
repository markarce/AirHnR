import React from 'react';

class Booking extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div >
                <div className='booking-price'>
                    <span className='price-perNight'>{this.props.listing.price}</span>
                    <span className='perNight-text'>per night</span>
                </div>
            </div>
        )
    }
} 

export default Booking;