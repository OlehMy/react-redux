import React from 'react';
import Form from '../common/Form';
import Table from '../common/Table';

function PlanetsPage({ planets, setPlanets }) {

  const handleAppPerson = (personData) => {
    const data = [...planets, personData];
    setPlanets(data);
  };

  const handleDelete = (id) => {
    const filteredPeople = planets.filter(person => person.id !== id);
    setPlanets(filteredPeople)
  };

  const getColumnNames = () => {
    if (!planets.length) {
      return [];
    }
    return Object.keys(planets[0])
  }

  return (
    <section>
      <Table
        data={planets}
        columns={getColumnNames()}
        tableDescriptor='#'
        onDelete={handleDelete}
      />
      <Form
        title='planet'
        columns={getColumnNames()}
        onAddData={handleAppPerson}
      />
    </section>
  );
}

export default PlanetsPage;