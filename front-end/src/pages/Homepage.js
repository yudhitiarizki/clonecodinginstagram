import React from 'react';
import '../App.css';
import Navibar from '../components/navigation/Navibar';
import Home from '../components/home/Home';

function HomePage() {
  return (
      <div className='HomePage'>
        <Navibar />
        <div className='main'>
          <Home />
        </div>
      </div>
  );
}

export default HomePage;
