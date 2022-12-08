import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "../components/create post/CreatePost";
import Explore from "../components/explore/Explore";
import DirectMessages from "../components/messages/DirectMessages";
import More from "../components/more/More";
import Notifs from "../components/notifs/Notifs";
import Profile from "../components/profile/Profile";
import Search from "../components/search/Search";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Signuppage from "../pages/Signuppage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<DirectMessages />} />
        <Route path="/notifs" element={<Notifs />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<More />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
