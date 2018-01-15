import React from 'react';
const styles = {
  container: {
    marginLeft: '60px'
  }
};

class Confirmation extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={styles.container}>
              <h1>You're all set!</h1>
              <h3>An email confirmation has been sent and your host has been notified.</h3>
              <h3>Enjoy your trip!</h3>   
              <br/>
              <br/>
              <br/> 
            </div>
        )
    }
}

export default Confirmation