import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navibar from './components/navigation/Navibar';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Explore from './components/explore/Explore';
import DirectMessages from './components/messages/DirectMessages';
import Notifs from './components/notifs/Notifs';
import CreatePost from './components/create post/CreatePost';
import Profile from './components/profile/Profile';
import More from './components/more/More';

function App() {
  return (
    <Router >
      <div className='app'>
        <Navibar />
        <div className='main'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/messages" element={<DirectMessages />} />
            <Route exact path="/notifs" element={<Notifs />} />
            <Route exact path="/create" element={<CreatePost />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </Router  >
  );
}

export default App;
