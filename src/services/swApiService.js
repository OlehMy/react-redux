import axios from "axios"

export const getPeople = async () => {
  const peopleResponse = await axios.get('https://swapi.dev/api/people/');
  return peopleResponse.data.results.map(
    ({ name, height, mass, birth_year, gender }) => (
      { name, height, mass, birth_year, gender, id: name + birth_year }
    )
  );
}

export const getPlanets = async () => {
  const planetsResponse = await axios.get('https://swapi.dev/api//planets/');
  return planetsResponse.data.results.map(
    ({ name, population, orbital_period, rotation_period, diameter, climate }) => (
      { name, population, orbital_period, rotation_period, diameter, climate, id: name + diameter }
    )
  );
}