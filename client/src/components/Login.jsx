import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: 'absolute',
    width: 500,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 20,
  };
}

let buttonStyle = {
  width: '100%',

};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <IconButton aria-label="Delete">
              <ClearIcon />
            </IconButton>
            <Button style={buttonStyle} color='primary' onClick={this.handleOpen}>Log in with Facebook</Button>
            <Button style={buttonStyle} onClick={this.handleOpen}>Log in with Google</Button>
            <Divider />
            or

            <a>Show password</a>
            <Button style={buttonStyle} color='accent' onClick={this.handleOpen}>Log in</Button>
            <a>Forgot password?</a>
            <Divider />
            Don’t have an account? <a>Sign up</a>
          </div>
        </Modal>
      </div>
    );
  };
};

export default withStyles(styles)(Login);