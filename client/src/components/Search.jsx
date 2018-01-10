import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClickFunction = this.handleClickFunction.bind(this)
  }

  handleChange(event) {
    console.log(this.state.value)
    this.setState({
      value: event.target.value
    })
  }

handleClickFunction() {
  const options = {
    method: 'GET',
    contentType: "application/json",
    mode: 'cors',
    cache: 'default'
  }
  fetch(`/api/listings?q=${this.state.value}`, options)
    .then((response) => response.json())
    .then((listings) => {
      console.log(listings)
    })
}

  render(){
    return(
      <div>
        <div>
          <input className="col-lg-6 mb-3" type="text" placeholder="Anywhere..." id="place" onChange={this.handleChange}/>
          <button className="btn btn-primary" value={$("#place").val()} onClick={this.handleClickFunction}>Go</button>
        </div>
      </div>
    )
  }
}

export default Search
