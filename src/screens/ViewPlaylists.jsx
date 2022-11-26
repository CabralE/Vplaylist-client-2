import { allPlaylists } from "../services/playlists";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";

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
      <div key={playlist._id} class="playlist">
        <Link to={`/playlist/${playlist._id}`}>
          <h1>{playlist.playlistName}</h1>
        </Link>
        <img src={playlist.image} alt={playlist.playlistName} />
      </div>
    ));
    console.log("this is playlistData: ", playlistData);
    return <div>{playlistData}</div>;
  };

  return (
    <>
      <h1>All of the playlists</h1>
      {playlists !== null ? loaded() : <Loading />}
    </>
  );
}

export default AllPlaylists;
