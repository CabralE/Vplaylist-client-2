import { allPlaylists } from "../services/playlists";
import { useState, useEffect } from "react";
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

  return (
    <>
      <h1>All of the playlists</h1>
      <p>{playlists !== null ? JSON.stringify(playlists) : <Loading />}</p>
    </>
  );
}

export default AllPlaylists;
