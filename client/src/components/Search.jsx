import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.getGoogleSuggestions = this.getGoogleSuggestions.bind(this);
  }

  getGoogleSuggestions(q) {
    fetch(`/api/autosuggest/${q.replace(' ', '+')}`)
      .then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))

  };
    
  handleChange(event) {
    this.props.searchTerm(event.target.value);
    console.log(event);
  }

  handleSearchClick() {
    this.props.handleSearchClick();
  }

  render() {
    return (
      <div className='search-box'>
        <input type="text" placeholder="     Anywhere..." id="place" onChange={this.handleChange}/>
        {/* <button value={$("#place").val()} onClick={this.handleSearchClick}>Go</button> */}
      </div>
    );
  }
}

export default Search


