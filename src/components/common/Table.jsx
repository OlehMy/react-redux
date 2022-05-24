import React from 'react';
import Button from './Button';

function Table({ data, columns, tableDescriptor, onDelete }) {
  return (
    <div className='table-responsive  mb-3'>
      <table className='table table-dark table-striped align-middle'>
        <thead className='text-warning'>
          <tr>
            <th scope='col'>{tableDescriptor}</th>
            {columns.map(columnTitle => (
              <th key={columnTitle} scope='col'>{columnTitle}</th>
            ))}
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope='row'>{++index}</th>
              {columns.map(columnTitle => (
                <td key={item[columnTitle] + item.id}>{item[columnTitle]}</td>
              ))}
              <td>
                <Button
                  label='Delete'
                  classes='btn btn-outline-light btn-sm'
                  onClick={() => onDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;