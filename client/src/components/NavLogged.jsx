import React, { Component } from 'react';
import Button from 'material-ui/Button';

class NavLoggedIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button>My Trips</Button>
        <img src="https://lh3.googleusercontent.com/-ORsE-MnedSg/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT6fWpCwuvLhbyalfV0oa-uwRvpf0A/mo/photo.jpg?sz=46"
        className="avatar-img"/>
      </div>
    )
  }
}

export default NavLoggedIn;