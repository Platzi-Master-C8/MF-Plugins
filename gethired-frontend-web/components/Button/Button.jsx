import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const Button = ({ name, onClick, isLink }) => (
  <button 
    className="getToken-button"
    type="button"
    onClick={onClick}
  >
    {isLink ?
      <a href="/api/auth/login">{name}</a>
    : `${name}`}
  </button>
)

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
};
  