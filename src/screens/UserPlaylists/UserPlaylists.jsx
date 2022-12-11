import { useAuthContext } from "../../hooks/useAuthContext";
import Loading from "../../components/Loading/Loading.js";
import "./UserPlaylists.css";
import { Link } from "react-router-dom";

function UserPlaylists() {
  const { user } = useAuthContext();

  const loaded = () => {
    let userPlaylists = user.playlists;
    const arr = userPlaylists.map((playlist, index) => {
      return (
        <Link to={`/playlist/${playlist._id}`}>
          <div className="playlist" key={index}>
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
          </div>
        </Link>
      );
    });

    return (
      <>
        <h2>{user.username}'s playlists</h2>
        <div className="wrapper">{arr}</div>
      </>
    );
  };
  /*
 
  const delay = (duration) => {
    return new Promise((res) => {
      setTimeout(res, duration);
    });
  };

  const loaded = () => {
    const userPlaylistsData = playlists.playlists.map((playlist) => {
      {
        console.log("playlist:", playlist);
      }
      <div key={playlist._id}>
        <h3>{playlist.playlistName}</h3>
        <h1>hi</h1>
      </div>;
    });

    return <div>{userPlaylistsData}</div>;
  };

  useEffect(() => {
    const fetchPlaylists = async () => {
      await delay(1500);
      setplaylists(user);
    };
    return () => {
      fetchPlaylists();
    };
  }, [user]);
  */
  return (
    <>
      <h1>This will be the user's playlists</h1>
      {user ? loaded() : <Loading />}
    </>
  );
}

export default UserPlaylists;
