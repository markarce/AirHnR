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


  handleChange(e) {
    if (e.keyCode === 13) {this.props.handleSearchClick()}
    else{
      this.props.searchTerm(e.target.value)
      this.getGoogleSuggestions(e.target.value)
    }
    
  }

  handleSearchClick() {
    this.props.handleSearchClick();
  }

  render() {
    return (
      <div>
        <input className="col-lg-6 mb-3" type="text" placeholder="Anywhere..." id="place" onKeyUp={this.handleChange} />
          <button className="btn btn-primary" value={$("#place").val()} onClick={this.handleSearchClick}>Go</button>
      </div>
    );
  }
}

export default Search


