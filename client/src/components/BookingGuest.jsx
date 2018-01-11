import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
<<<<<<< HEAD
    autoWidth: false,
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 330,
    autoWidth: false
  },
  selectEmpty: {
    // marginTop: theme.spacing.unit * 2,
    // width: 300,
    // autoWidth: false
=======
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
>>>>>>> a18d70825d5ac5c8a8095507eaf5ad1bc122690a
  },
});

class BookingGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 0
    };
  }

  renderSelect () {
    let guests = [];
    for (let i = 1; i <= this.props.maxGuests; i++) {
      guests.push(i);
    }

    return guests.map(guest => {
      return <MenuItem key={guest} value={guest}>{guest}</MenuItem>
    });
  }  

  handleChange (event) {
    this.setState({
      guests: event.target.value
    });
  };

  render() {
<<<<<<< HEAD
    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel id='guest-lable' htmlFor="guests-simple">Guests</InputLabel>
          <Select id='guest-select'
=======

    return (
      <form className={this.props.container} autoComplete="off">
        <FormControl className={this.props.formControl}>
          <InputLabel htmlFor="guests-simple">Guests</InputLabel>
          <Select
>>>>>>> a18d70825d5ac5c8a8095507eaf5ad1bc122690a
            value={this.state.guests}
            onChange={this.handleChange.bind(this)}
            input={<Input name="guests" id="guests-simple" />}
          >
            {this.renderSelect()}
          </Select>
        </FormControl>
      </form>
    );
  }
}

BookingGuest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingGuest);