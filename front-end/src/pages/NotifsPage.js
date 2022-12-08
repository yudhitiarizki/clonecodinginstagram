import React from 'react';
import '../App.css';
import Navibar from '../components/navigation/Navibar';
import Notifs from '../components/notifs/Notifs';

function NotifsPage() {
  return (
      <div className='NotifsPage'>
        <Navibar />
        <div className='main'>
          <Notifs />
        </div>
      </div>
  );
}

export default NotifsPage;
