import React from 'react';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
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
      password: '',
      email: '',
      errorMessage: null
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.login = this.login.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
    console.log('open?');
  };

  handleClose() {
    this.setState({ open: false });
  };

  login(email, password) {
    const options = { method: 'POST',
      headers: {      
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({user_email: email, user_password: password})
    };

    fetch('/login', options)
    .then((response) => {
      if(!response.ok) return console.log('ERROR IN LOGIN', response);
      return response.json();
    }).then((resObject) => {
      if(resObject.error) {
        this.setState({
          errorMessage: resObject.error
        });
      } else {
        this.setState({
          open: false,
          errorMessage: ''
        });
        this.props.userLoggedIn(resObject);
      }
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen}>Log In</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()}>
            <IconButton aria-label="Delete">
              <ClearIcon onClick={this.handleClose}/>
            </IconButton>
            <Button style={buttonStyle} color='primary' onClick={this.handleOpen}>Log in with Facebook</Button>
            <Button style={buttonStyle} onClick={this.handleOpen}>Log in with Google</Button>
            <Divider />
            or
            <form className={classes.container} autoComplete="off" noValidate>
              <div>
                <TextField
                fullWidth
                id="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={(e) => {
                  this.setState({'email': e.target.value});
                  }
                }
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  required
                  id="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  helperText={this.state.passwordError}
                  onChange={(e) => this.setState({'password': e.target.value})}
                />
              </div>
            </form>
            <Button style={buttonStyle} color='accent' onClick={() => this.login(this.state.email, this.state.password)}>Log in</Button>
            {this.state.errorMessage ? <div> {this.state.errorMessage} </div> : null}
            <a>Forgot password?</a>
            <Divider />
            Don’t have an account? <a id='sign-up'>Sign up</a>
          </div>
        </Modal>
      </div>
    );
  };
};

export default withStyles(styles)(Login);