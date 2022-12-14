import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../components/Loading/Loading.js";
import "./UserPlaylists.css";
import { Link, useNavigate } from "react-router-dom";
import { deletePlaylist } from "../../services/playlists";
import axios from "axios";
import jwtDecode from "jwt-decode";

function UserPlaylists() {
  let navigate = useNavigate();
  const { user } = useAuthContext();

  const deleteBtn = (id) => {
    return (
      <button className="deleteButton" onClick={() => deletePlaylist(id)}>
        delete
      </button>
    );
  };

  const updateBtn = () => {
    return <button className="deleteButton"></button>;
  };

  const handleDelete = async (id) => {
    let usersPlaylists = false;
    user?.playlists.forEach((playlist) => {
      if (playlist._id === id) usersPlaylists = true;
    });
    if (!user) {
      navigate("/signin", { replace: true });
    } else if (usersPlaylists === false) {
      navigate("/createplaylist", { replace: true });
    } else {
      deletePlaylist(id);
      navigate("/", { replace: true });
    }
  };

  const handleEdit = async (id) => {
    if (!user) {
      navigate("/signin", { replace: true });
    } else {
      navigate(`/playlist/${id}/edit`);
    }
  };

  const loaded = () => {
    let userPlaylists = user.playlists;
    const arr = userPlaylists.map((playlist, index) => {
      return (
        <div className="playlist" key={index}>
          <Link to={`/playlist/${playlist._id}`}>
            <img
              width="100px"
              height="100px"
              src={
                playlist.image.length <= 8
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                  : playlist.image
              }
            />
            <p>{playlist.playlistName}</p>
            <p>{playlist.playlistTag}</p>
          </Link>
          <button className="" onClick={() => handleDelete(playlist._id)}>
            Delete Playlist
          </button>
          <button className="" onClick={() => handleEdit(playlist._id)}>
            Edit Playlist
          </button>
        </div>
      );
    });

    return (
      <>
        <h2>{user.username}'s playlists</h2>
        <div className="wrapper">{arr}</div>
      </>
    );
  };

  return (
    <>
      <h1>This will be the user's playlists</h1>
      {user ? loaded() : <Loading />}
    </>
  );
}

export default UserPlaylists;
