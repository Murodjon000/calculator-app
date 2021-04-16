import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next }) => (
  <div className="display">{total || next || '0'}</div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
