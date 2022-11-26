import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postPlaylist } from "../services/playlists";

function CreatePlaylist() {
  let navigate = useNavigate();
  const { user } = useAuthContext();
  const [playlist, setPlaylist] = useState({
    playlistName: "",
    playlistTag: "",
    image: "",
  });

  function handleChange(event) {
    const newState = { ...playlist };
    newState[event.target.name] = event.target.value;
    setPlaylist(newState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      navigate("/signin", { replace: true });
    } else {
      await postPlaylist(playlist);
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <h1>Create a Playlist on this page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="playlistName"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="playlistTag"
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="playlist cover"
          onChange={handleChange}
        />
        <button type="submit">Create Playlist</button>
      </form>
    </>
  );
}

export default CreatePlaylist;
