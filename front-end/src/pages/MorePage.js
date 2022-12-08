import React from 'react';
import '../App.css';
import More from '../components/more/More';
import Navibar from '../components/navigation/Navibar';

function MorePage() {
  return (
      <div className='MorePage'>
        <Navibar />
        <div className='main'>
          <More />
        </div>
      </div>
  );
}

export default MorePage;
