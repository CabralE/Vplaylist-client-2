import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  allPlaylists,
  getPlaylist,
  postPlaylist,
} from "../../services/playlists";
import { updateUserPlaylists } from "../../services/users";
import "./CreatePlaylist.css";

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
    console.log(user.id);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      navigate("/signin", { replace: true });
    } else {
      await postPlaylist(playlist);
      const allOfThePlaylists = await allPlaylists();
      const lastPlaylist = await allOfThePlaylists[
        allOfThePlaylists.length - 1
      ];
      const arrOfPlaylists = await user.playlists;
      await arrOfPlaylists.push(lastPlaylist);
      user.playlists = await arrOfPlaylists;
      console.log(user, "userPlaylist:", user.playlists);
      await updateUserPlaylists(user.id, `${user.playlists}`);
      console.log(user);
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="createplaylistbody">
      <div className="center">
        <h1 className="title">Create a Playlist</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              name="playlistName"
              onChange={handleChange}
              required="required"
            />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="playlistTag"
              onChange={handleChange}
              required="required"
            />
            <span>Category</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="image"
              onChange={handleChange}
              required="required"
            />
            <span>cover</span>
          </div>
          <div className="inputbox">
            <button type="submit">Create Playlist</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePlaylist;
