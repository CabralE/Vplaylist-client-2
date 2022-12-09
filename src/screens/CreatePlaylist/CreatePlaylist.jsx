import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { allPlaylists, postPlaylist } from "../../services/playlists";
import "./CreatePlaylist.css";
import axios from "axios";

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
      let userPlaylists = user.playlists;
      let dataAllPlaylist = await allPlaylists();
      let lastPlaylist = dataAllPlaylist[dataAllPlaylist.length - 1];
      userPlaylists.push(lastPlaylist);
      let playlistId = [];
      userPlaylists.forEach((playlist) => {
        playlistId.push(playlist._id);
      });
      axios({
        method: "put",
        url: `https://vplayserver-production.up.railway.app/user/${user.id}`,
        data: {
          playlists: [...playlistId],
        },
      });

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
