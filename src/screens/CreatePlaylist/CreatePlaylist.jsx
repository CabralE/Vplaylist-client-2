import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  allPlaylists,
  getPlaylist,
  postPlaylist,
} from "../../services/playlists";
import { updateUserPlaylists } from "../../services/users";
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
  const [submitted, setSubmitted] = useState(false);

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
      //setSubmitted(true);
      await postPlaylist(playlist);
      // const allData = await allPlaylists();
      // const lastPlaylist = await allData[allData.length - 1];
      // const id = user.id;
      // const URL = `https://vplayserver-production.up.railway.app/user/${id}`
      console.log(submitted);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    axios({
      method: "put",
      url: `https://vplayserver-production.up.railway.app/user/63926940e338931c74a86194`,
      data: {
        playlists: ["63926940e338931c74a8619a"],
      },
    });
  }, [submitted]);

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
