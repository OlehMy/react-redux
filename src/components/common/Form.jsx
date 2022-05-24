import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function Form({ title, columns, onAddData }) {
  const initialData = columns.reduce((cols, columnName) => {
    cols[columnName] = '';
    return cols;
  }, {}
  );
  const [personData, setPersonData] = useState(initialData);
  const [error, setError] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (Object.keys(personData).length === columns.length) {
      onAddData(personData);
      setError('');
    } else setError('Cannot be empty!');
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const data = { ...personData };
    data[input.name] = input.value;
    setPersonData(data);
  };

  return (
    <form>
      <h4 className='text-center text-warning'>Add new {title}</h4>
      {columns.map(columnName => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={personData[columnName]}
          type='input'
          error={error}
          onChange={(e) => handleChange(e)}
        />
      ))}
      <Button
        label='Save'
        type='submit'
        classes='btn btn-dark mb-3'
        onClick={(e) => handleClick(e)}
      />
    </form>
  );
}

export default Form;