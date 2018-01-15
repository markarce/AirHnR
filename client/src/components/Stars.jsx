import React from 'react';
import Star from 'material-ui-icons/Star'
import StarBorder from 'material-ui-icons/StarBorder'
import StarHalf from 'material-ui-icons/StarHalf'
import { withStyles } from 'material-ui/styles';
import _ from 'lodash';

const styles = {};

const Stars = (props) => {
  //converts rating to a string of stars
  console.log(props.rating)
  if (props.rating === null) {
    return (
      {/* <i className="material-icons gold700" >new_releases</i> */}
      <i className="material-icons gold700" >fiber_new</i>
    )
  }
  let custom = props.styles || {};
  _.extend(styles, custom);
  let offset = parseFloat(props.offset) || 0;
  if (offset > 1) offset = 1;
  if (offset < 0) offset = 0;
  let total = props.total || 5;
  if (total < 1) total = 1;
  let rating = parseFloat(props.rating) || 0;
  if (rating > total) rating = total;
  if (rating < 0) rating = 0;
  let full = Math.floor(rating + offset);
  let half = (rating + offset - full > 0.5) ? 1 : 0;
  let empty = parseInt(total - full - half);
  let starsCt = [0, 0, total];

  return (
    <span>
      {Array(full).fill(null).map((i, j) => <i className="material-icons cyan10" key={'f' + j}>star</i>)}
      {Array(half).fill(null).map((i, j) => <i className="material-icons cyan10" key={'f' + j}>star_half</i>)}
      {Array(empty).fill(null).map((i, j) => <i className="material-icons cyan10" key={'f' + j}>star_border</i>)}
    </span>
  );
};

export default withStyles(styles)(Stars);