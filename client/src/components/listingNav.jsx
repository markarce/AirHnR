import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
  
function ListingNav(props) {
  const { classes } = props;
  return (
    <div className='listing-nav'>
      <Button className={classes.button}>Overview</Button>
      <Button className={classes.button}>Reviews</Button>
      <Button className={classes.button}>The Host</Button>
      <Button className={classes.button}>Location</Button>
    </div>
  );
}
  
ListingNav.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(ListingNav);