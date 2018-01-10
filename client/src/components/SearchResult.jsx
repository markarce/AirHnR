import React from 'react';
import ReactDOM  from 'react-dom';
import { render } from 'react-dom';
import css from '../styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const SearchResult = (props) => (
    <li>
      <img src={props.image} />
      {props.roomtype}
      {props.beds}
      {props.name}
      {props.price} per night
      {props.star_rating}
    </li>
  )

export default SearchResult;