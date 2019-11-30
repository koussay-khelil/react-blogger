import React from 'react';
// import PropTypes from 'prop-types'
import { Grid, Cell } from 'react-md';
import './Tips.scss';

const Tips = ({
  tip,
}) => (
  <div className="tips">
    <div>
      <img src={tip.image} alt="post" className="image" />
    </div>
    <div className="punchline">
      {tip.punchline}
    </div>
    <div className="author">
      {tip.author}
    </div>
    <div className="advice">
      {tip.advice}
    </div>
    <div className="date">
      {tip.date}
    </div>
  </div>
);

// Tips.propTypes = {
// }

export default Tips;
