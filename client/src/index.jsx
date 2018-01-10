import React from 'react';
import { render } from 'react-dom';
import css from './styles/styles.css';
// import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';

import SearchResults from './components/SearchResults'
import Search from './components/Search.jsx'
import NavBar from './components/NavBar.jsx'
import $ from 'jquery'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div>

        <div>App is loaded </div>
      <SearchResults />
      <div>
        <NavBar/>
      </div>
      <br/>
      <div>
        <Search onClick={this.handleClickFunction}/>
      </div>
      <div>App is loaded</div>

      </div>
    );
  }

}

render(<App />, document.getElementById('app'));
