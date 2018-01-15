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
import Stars from './Stars.jsx';

const styles = {
  card: {
    width: 300,
    height: 300,
  },
  media: {
    height: 170,
  },
};

const makeStars = (stars, max) => {
  var decimal = stars - Math.floor(stars)
  var results = [];

  while (results.length < max) {
    if (results.length < Math.floor(stars)) {
      results.push(<i className="material-icons blue10" key={results.length}>star</i>);
    } else if (decimal > .25 && decimal < .75) {
      results.push(<i className="material-icons blue10" key={results.length}>star_half</i>);
      decimal = 0;
    } else if (decimal > .66) {
      results.push(<i className="material-icons blue10" key={results.length}>star</i>);
      decimal = 0;
    } else {
      results.push(<i className="material-icons blue10" key={results.length}>star_border</i>);
    }
  }
  return results;
}

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
          {/* <Typography>
            {makeStars(props.rating, 5)}

          </Typography> */}
          <Stars
            rating={props.rating}
            offset={0.25}
            total={5}
          />
        </CardContent>
      </Card>
  );
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);