import React from 'react';
import '../App.css';
import CreatePost from '../components/create post/CreatePost';
import Navibar from '../components/navigation/Navibar';

function CreatePostPage() {
  return (
      <div className='CreatePostPage'>
        <Navibar />
        <div className='main'>
          <CreatePost />
        </div>
      </div>
  );
}

export default CreatePostPage;
