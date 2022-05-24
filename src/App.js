import React, { useEffect, useState } from 'react';
import Navbar from './components/common/Navbar';
import HomePage from './components/pages/HomePage';
import PeoplePage from './components/pages/PeoplePage';
import PlanetsPage from './components/pages/PlanetsPage';
import { getPeople, getPlanets } from './services/swApiService'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPeople } from './store/actions/people'


function App() {

  const dispatch = useDispatch();

  // const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {

    const fetchPeople = async () => {
      const response = await getPeople();
      dispatch(setPeople(response));
    };
    fetchPeople();

    const fetchPlanets = async () => {
      const response = await getPlanets();
      setPlanets(response)
    };
    fetchPlanets();

  }, []);

  return (
    <>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='people' element={<PeoplePage />} />
          <Route path='planets' element={
            <PlanetsPage
              planets={planets}
              setPlanets={setPlanets}
            />
          }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
