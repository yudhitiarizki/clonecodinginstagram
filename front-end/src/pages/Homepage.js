import React from 'react';
import '../App.css';
import Navibar from '../components/navigation/Navibar';
import Home from '../components/home/Home';

function Homepage() {
  return (
      <div className='Homepage'>
        <Navibar />
        <div className='main'>
          <Home />
        </div>
      </div>
  );
}

export default Homepage;
