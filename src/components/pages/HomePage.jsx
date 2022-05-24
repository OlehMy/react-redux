import React, { useState } from 'react';
import ReactHowler from 'react-howler/lib/ReactHowler';
import swLogo from '../assets/images/sw.png';
import ost from '../assets/sounds/StarWars_OST.mp3'
import Button from '../common/Button';

function HomePage() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className='home-page text-center'>
      <ReactHowler
        src={ost}
        preload={true}
        playing={playing}
      />
      <Button
        label={playing ? 'Pause' : 'Play'}
        type='submit'
        classes='btn btn-outline-warning mb-4'
        onClick={() => setPlaying(!playing)}
      />
      <img className='container-fluid' src={swLogo} alt='StarWars.png' />
    </section>
  );
}

export default HomePage;