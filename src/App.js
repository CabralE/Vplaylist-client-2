import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import Home from "./screens/Home/Home";
import SignUp from "./screens/SignUp/SignUp.jsx";
import SignIn from "./screens/SignIn/SignIn.jsx";
import CreatePlaylist from "./screens/CreatePlaylist/CreatePlaylist.jsx";
import AllPlaylists from "./screens/ViewPlaylists/ViewPlaylists";
import ViewPlaylist from "./screens/ViewPlaylist/ViewPlaylist";
import UserPlaylists from "./screens/UserPlaylists/UserPlaylists.jsx";
import EditPlaylist from "./screens/EditPlaylist/EditPlaylist.jsx";
import Video from "./screens/Video/Video.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/playlist/:id" element={<ViewPlaylist />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} />
        <Route path="/playlist/:id/edit" element={<EditPlaylist />} />
        <Route path="/allplaylists" element={<AllPlaylists />} />
        <Route path="/userplaylists" element={<UserPlaylists />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
