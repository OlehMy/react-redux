import React from 'react';

function Input({ name, label, error, value, ...rest }) {
  return (
    <div className='form-group'>
      <label className='text-light' htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        {...rest}
        className='form-control mb-3'
      />
      {error && <div className='alert alert-warning'>{error}</div>}
    </div>
  );
}

export default Input;