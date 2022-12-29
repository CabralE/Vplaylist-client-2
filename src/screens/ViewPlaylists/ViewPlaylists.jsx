import "./ViewPlaylists.css";
import { allPlaylists } from "../../services/playlists";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function AllPlaylists() {
  const [playlists, setPlaylists] = useState(null);

  const delay = (duration) => {
    return new Promise((res) => {
      setTimeout(res, duration);
    });
  };
  useEffect(() => {
    const fetchPlaylists = async () => {
      let allPlaylistsData = await allPlaylists();
      await delay(1500);
      setPlaylists(allPlaylistsData);
    };
    return () => {
      fetchPlaylists();
    };
  }, []);

  const loaded = () => {
    const playlistData = playlists.map((playlist, index) => (
      <div key={playlist._id} className="all-playlist-playlist">
        <Link to={`/playlist/${playlist._id}`} className="all-playlist-link">
          <img
            src={
              playlist.image.length > 10
                ? playlist.image
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            }
            alt={playlist.playlistName}
            className="all-playlists-image"
          />

          <h3 className="all-playlist-name">{playlist.playlistName}</h3>

          <p className="all-playlist-tag">{playlist.playlistTag}</p>
        </Link>
      </div>
    ));
    return (
      <div className="all-playlists-container">
        {playlistData}
        {playlistData}
      </div>
    );
  };

  return (
    <div className="all-playlists-body">
      <h2 className="h2-all-playlists">All playlists</h2>
      {playlists !== null ? loaded() : <Loading />}
    </div>
  );
}

export default AllPlaylists;
