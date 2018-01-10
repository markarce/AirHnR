import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import css from '../styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import data from '../../../lib/dummyData.js';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeResults: data.testSearchResults
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handleListingClick(event.target.value);
  }

  render() {
    console.log('state', this.state);
    var resultsList = this.state.fakeResults.map((listing) => <li>{listing.name}</li>);

    return (
       <div>
        <ul>
          {resultsList}
       </ul>
      
      </div>
    )
  }
}

export default SearchResults;