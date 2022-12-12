import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../components/Loading/Loading.js";
import "./UserPlaylists.css";
import { Link } from "react-router-dom";
import { deletePlaylist } from "../../services/playlists";

function UserPlaylists() {
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
          <button className="" onClick={() => deletePlaylist(playlist._id)}>
            delete button
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
