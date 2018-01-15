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
    cursor: 'pointer',
  },
  media: {
    height: 180,
  },
  cardContent: {
    margin: 0,
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
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
        <CardContent style={styles.cardContent}>
          <Typography type="caption" style={{color: "#484848", fontFamily: "Crimson Text"}}>
            <strong>{props.roomtype.toUpperCase()} - BEDS: {props.beds}</strong>
          </Typography>
          <Typography type="title" style={{color: "#484848", fontFamily: "Crimson Text"}}>
            {props.name}
          </Typography>
          <Typography type="caption" style={{color: "#737373"}}>
            ${props.price} per night
          </Typography>
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