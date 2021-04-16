import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btn, handleClick, className }) => (
  <button onClick={() => handleClick} className={className}>
    {btn}
  </button>
);

Button.propTypes = {
  btn: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
