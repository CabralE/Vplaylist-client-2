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
    console.log("playlist in viewPlaylist", playlist.videos[0].videoUrl);
    const firstVideo = (
      <div className="main-video">
        <div className="video">
          <iframe src={playlist.videos[0].videoUrl}></iframe>
          <h3>{playlist.videos[0].videoName}</h3>
        </div>
      </div>
    );
    const playlistData = playlist.videos.map((video, index) => (
      <div key={video._id} class="vid">
        <iframe width="420" height="315" src={video.videoUrl}></iframe>
        <Link to={`${video.videoUrl}`}>
          <h3 className="title">{video.videoName}</h3>
        </Link>
      </div>
    ));

    return (
      <div className="container">
        {firstVideo}
        {playlistData}
      </div>
    );
  };

  return (
    <>
      <h1>View the playlist here</h1>
      {playlist ? loaded() : "test"}
    </>
  );
}

export default ViewPlaylist;
