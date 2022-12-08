import React from 'react';
import '../App.css';
import Navibar from '../components/navigation/Navibar';
import Profile from '../components/profile/Profile';

function ProfilePage() {
  return (
      <div className='ProfilePage'>
        <Navibar />
        <div className='main'>
          <Profile />
        </div>
      </div>
  );
}

export default ProfilePage;
