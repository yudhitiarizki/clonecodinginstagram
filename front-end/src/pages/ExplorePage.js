import React from 'react';
import '../App.css';
import Explore from '../components/explore/Explore';
import Navibar from '../components/navigation/Navibar';

function ExplorePage() {
  return (
      <div className='ExplorePage'>
        <Navibar />
        <div className='main'>
          <Explore />
        </div>
      </div>
  );
}

export default ExplorePage;
