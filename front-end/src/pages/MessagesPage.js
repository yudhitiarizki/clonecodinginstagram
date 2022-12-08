import React from 'react';
import '../App.css';
import Messages from '../components/messages/Messages';
import Navibar from '../components/navigation/Navibar';

function MessagesPages() {
  return (
      <div className='MessagesPages'>
        <Navibar />
        <div className='main'>
          <Messages />
        </div>
      </div>
  );
}

export default MessagesPages;
