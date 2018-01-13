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

// const styles = theme => ({
//   SearchResult: {
//   },
//   SearchResults: {
//     paddingLeft: '8',
//   },
//   card: {
//     width: 300,
//     height: 300,
//   },
//   media: {
//     height: 170,
//   },
// });

const styles = {
  card: {
    width: 300,
    height: 300,
  },
  media: {
    height: 170,
  },
};

const makeStars = (stars) => {
  var result = [];
  for (var i = 1; i <= stars; i++) {
    result.push(<i class="material-icons">star</i>)
  }
  while (result.length < 5) {
    result.push(<i className="material-icons">star_border</i>)
  }
  return result;
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
          <Typography>
            {makeStars(Math.round(props.rating))}
          </Typography>
        </CardContent>
      </Card>
  );
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);

//console.log(makeStars(Math.round(props.rating)))