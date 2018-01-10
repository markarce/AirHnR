import React from 'react';
import { render } from 'react-dom';
import css from './styles/styles.css';
// import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';
import SearchResults from './components/SearchResults'



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
      </div>
    );
  }

}

render(<App />, document.getElementById('app'));
