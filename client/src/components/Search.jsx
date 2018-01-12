import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleChange(event) {
    this.props.searchTerm(event.target.value)
  }

  handleSearchClick() {
    this.props.handleSearchClick();
  }

  render() {
    return (
      <div>
        <div>
          <input className="col-lg-6 mb-3" type="text" placeholder="Anywhere..." id="place" onChange={this.handleChange}/>
          <button className="btn btn-primary" value={$("#place").val()} onClick={this.handleSearchClick}>Go</button>
        </div>
      </div>
    );
  }
}

export default Search
