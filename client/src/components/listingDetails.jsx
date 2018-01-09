import React from 'react';
import ListingNav from './listingNav.jsx';
import Divider from 'material-ui/Divider';
import ListDividers from './listingDivider.jsx';

const ListingDetails = (props) => {
    return (
        <div className='listing-wrapper'>
            <div className='listing-img' >
                <img src={props.listing.image_url} style={{width: `100%`, 'maxheight': `350px`}}/> 
            </div>
            <ListingNav />
            {/* <ListDividers /> */}
            <div className='listing-title'>
                <h1>{props.listing.name}</h1>
            </div>
        </div>
    )
}

export default ListingDetails;
