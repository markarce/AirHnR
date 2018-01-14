import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Avatar from './Avatar.jsx';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
  list: {
    width: 250
  },
  container: {
    textAlign: 'center'
  },
  links: {
    width: '100%'
  }
};

class NavLoggedIn extends Component {

  state = {
    right: false
  };

  toggleDrawer = (side, open, e) => () => {
    e.stopPropagation();
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.user);
    const sideList = (
      <div className={classes.list}>
        <Avatar/>
        <List>{this.props.user.first_name + ' ' + this.props.user.last_name}</List>
        <List>{this.props.user.email}</List>
        <Divider />
        <Button onClick={() => this.props.triggerView('trips')} style={styles.links}>My Trips</Button>
        <Divider />
        <Button style={styles.links}>Settings</Button>
        <Divider />
        <Button onClick={this.props.logOut} style={styles.links}>Log out</Button>
      </div>
    );

    return (
      <div style={{display: 'flex'}} onClick={(e) => this.toggleDrawer('right', true, e)()}>
        <Avatar/>
        <Drawer anchor="right" open={this.state.right} onClose={(e) => this.toggleDrawer('right', false, e)()}>
          <div
            tabIndex={0}
            role="button"
            onClick={(e) => this.toggleDrawer('right', false, e)()}
            onKeyDown={(e) => this.toggleDrawer('right', false, e)()}
            style={styles.container}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(NavLoggedIn);