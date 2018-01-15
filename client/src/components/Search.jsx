import React from 'react';
// import $ from 'jquery';

const styles = {
  bar: {
    width: '60%',
    height: '60px',
    marginTop: '20px'
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.getGoogleSuggestions = this.getGoogleSuggestions.bind(this);
  }

  getGoogleSuggestions(q) {
    fetch(`/api/autosuggest/${q.replace(' ', '+')}`)
      .then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))

  };

  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearch (e) {
    if (e.key === 'Enter') {
      this.props.handleSearchClick(this.state.query);
      e.target.value = '';
    }
  }

  render() {
    const barStyle = this.props.isMainPage ? styles.bar : {};
    return (
      <div className='search-box'>
        <input style={barStyle} onChange={e => this.updateQuery(e)} onKeyPress={e => this.handleSearch(e)} type="text" placeholder="Anywhere..." id="place" />
        {/* <button value={$("#place").val()} onClick={this.handleSearchClick}>Go</button> */}
      </div>
    );
  }
}

export default Search


