import React from 'react';
import Login from './Login';
import Button from 'material-ui/Button';
let NotLoggedIn = (props) => {
  const styles = {
    display: 'flex'
  }
  return (
    <div style={styles}>
      <Login userLoggedIn={props.userLoggedIn}/>
      <Button color="contrast" onClick={() => props.triggerView('createAccount')}>Create Account</Button>
    </div>
  )
}

export default NotLoggedIn;