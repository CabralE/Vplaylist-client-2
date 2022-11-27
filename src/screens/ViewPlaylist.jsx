import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

  const loaded = () => {
    console.log("playlist in viewPlaylist", playlist);
    const playlistData = playlist.videos.map((video, index) => (
      <div key={video._id} class="video">
        <Link to={`${video.videoUrl}`}>
          <h1>{video.videoName}</h1>
        </Link>
        <iframe
          width="560"
          height="315"
          src={video.videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    ));

    return <div>{playlistData}</div>;
  };

  return (
    <>
      <h1>View the playlist here</h1>
      {playlist ? loaded() : "test"}
    </>
  );
}

export default ViewPlaylist;
