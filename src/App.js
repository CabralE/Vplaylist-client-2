import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import CreatePlaylist from "./screens/CreatePlaylist.jsx";
import AllPlaylists from "./screens/ViewPlaylists";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} />
        <Route path="/allplaylists" element={<AllPlaylists />} />
        <Route path="/playlist/:id" elemental={<ViewPlatlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
