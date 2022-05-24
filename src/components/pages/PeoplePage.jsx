import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../common/Form';
import Table from '../common/Table';
import { getAllPeople } from '../../store/selectors/people'
import { deletePerson, setPeople } from '../../store/actions/people';

function PeoplePage() {
  const dispatch = useDispatch();
  const people = useSelector(state => getAllPeople(state));

  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    dispatch(setPeople(data));
  };

  const handleDelete = (id) => {
    dispatch(deletePerson(id));
  };

  const getColumnNames = () => {
    if (!people.length) {
      return [];
    }
    return Object.keys(people[0])
  }

  return (
    <section>
      <Table
        data={people}
        columns={getColumnNames()}
        tableDescriptor='#'
        onDelete={handleDelete}
      />
      <Form
        title='person'
        columns={getColumnNames()}
        onAddData={handleAppPerson}
      />
    </section>
  );
}

export default PeoplePage;