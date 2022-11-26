import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../services/playlists";

function ViewPlaylist() {
  const [playlist, setplaylist] = useState(null);
  const { id } = useParams();

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   navigate("/checkout", { state: item });
  // };

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
      {playlist ? JSON.stringify(playlist) : "waiting for playlist to load"}
    </>
  );
}

export default ViewPlaylist;
