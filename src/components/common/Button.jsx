import React from 'react';

function Button({ onClick, label, classes, disabled, type }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classes}
      type={type}
    >
      {label}
    </button>
  );
}

export default Button;