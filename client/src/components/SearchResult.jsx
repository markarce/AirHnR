import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import css from '../styles/styles.css';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const styles = {
  card: {
    width: 300,
    height: 300,
  },
  media: {
    height: 170,
  },
};

function SearchResult (props) {
  const { classes } = props;
  return (
      <Card 
        component="div" 
        className={classes.card} 
        onClick={() => { props.handleClick(props.id) }}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography type="caption">
            {props.roomtype} - Beds: {props.beds}
          </Typography>
          <Typography type="title">
            {props.name}
          </Typography>
          <Typography type="caption">
            ${props.price} per night
          </Typography>
          <Typography>
            {props.rating} / 5 star rating
          </Typography>
        </CardContent>
      </Card>
  );
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);