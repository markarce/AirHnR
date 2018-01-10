import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import css from '../styles/styles.css';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SearchResult (props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="House Placeholder"
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
          {props.rating}
          </Typography>
          </CardContent>
            <CardActions>
        </CardActions>
      </Card>
    </div>
  );
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult);

// const SearchResult = (props) => (
//     <li>
//       <img src={props.image} />
//       {props.roomtype}
//       {props.beds}
//       {props.name}
//       {props.price} per night
//       {props.star_rating}
//     </li>
//   )
//   <Button dense color="primary">
//   Share
// </Button>
// <Button dense color="primary">
//   Learn More
// </Button>