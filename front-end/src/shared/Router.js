import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePostPage from "../pages/CreatePostPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MessagesPages from "../pages/MessagesPage";
import MorePage from "../pages/MorePage";
import NotifsPage from "../pages/NotifsPage";
import ProfilePage from "../pages/ProfilePage";
import ExplorePage from "../pages/ExplorePage";
import SearchPage from "../pages/SearchPage";
import SignupPage from "../pages/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/messages" element={<MessagesPages />} />
        <Route path="/notifs" element={<NotifsPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
