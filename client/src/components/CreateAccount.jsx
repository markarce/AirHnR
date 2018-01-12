import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      passwordError: '',
      missingMandatoryFields: ''
    };
    this.passwordNode = null;
  }

  createAccount() {
    if(this.state.password !== this.state.confirmPassword) {
      console.log('EERRORR');
      this.setState({
        passwordError: 'Passwords do not match'
      });
    } else {
      this.setState({
        passwordError: ''
      });
      if(this.state.name.length > 0 && this.state.lastName.length > 0 && this.state.password.length > 0) {
        this.setState({
          missingMandatoryFields: '',
        });
        console.log('ACCOUNT CREATED!');
      } else {
        this.setState({
          missingMandatoryFields: 'Complete all mandatory fields'
        });
      }
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          helperText={this.state.missingMandatoryFields}
          onChange={(e) => {
            this.setState({'name': e.target.value, 'missingMandatoryFields': ''});
            }
          }
          margin="normal"
        />
        <TextField
          required
          id="last-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastName}
          helperText={this.state.missingMandatoryFields}
          onChange={(e) => {
            this.setState({'lastName': e.target.value, 'missingMandatoryFields': ''});
            }
          }
          margin="normal"
        />
        <TextField
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
        <TextField
          required
          id="confirm-password"
          label="Confirm Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          helperText={this.state.passwordError}
          onChange={(e) => this.setState({'confirmPassword': e.target.value})}
        />
        <Button raised className={classes.button} onClick={() => this.createAccount()}>
        Create Account
        </Button>
      </form>
    );
  }
}


export default withStyles(styles)(CreateAccount);