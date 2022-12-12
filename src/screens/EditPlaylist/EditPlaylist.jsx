import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPlaylist.css";
import { getPlaylist, updatePlaylist } from "../../services/playlists";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";

function EditPlaylist() {
  let navigate = useNavigate();
  let { user } = useAuthContext();

  const [editPlaylist, setEditPlaylist] = useState({
    playlistName: "",
    playlistTag: "",
    image: "",
    videos: [],
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const playlist = await getPlaylist(id);
      setEditPlaylist(playlist);
    };
    fetchPlaylist();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditPlaylist({
      ...editPlaylist,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      navigate("/signin", { replace: true });
    } else {
      await updatePlaylist(id, editPlaylist);
      axios({
        method: "put",
        url: `https://vplayserver-production.up.railway.app/playlist/${id}`,
        data: {
          ...editPlaylist,
        },
      });

      navigate("/", { replace: true });
    }

    navigate(`/playlist/${id}`);
  };

  return (
    <div className="editplaylistbody">
      <div className="center">
        <h1 className="title">Edit Playlist</h1>
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
            <input type="text" name="playlistTag" onChange={handleChange} />
            <span>Category</span>
          </div>
          <div className="inputbox">
            <input type="text" name="image" onChange={handleChange} />
            <span>cover</span>
          </div>
          <div className="inputbox">
            <button type="submit">Edit Playlist</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPlaylist;
