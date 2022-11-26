import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../services/playlists";
// import Loading from "../components/Loading/Loading";

function ViewPlaylist() {
  const [playlist, setplaylist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await getPlaylist(id);
      setplaylist(response);
      console.log(response);
    };
    fetchPlaylist();
  }, [id]);

  return (
    <>
      <h1>View the playlist here</h1>
      {playlist ? JSON.stringify(playlist) : "test"}
    </>
  );
}

export default ViewPlaylist;
