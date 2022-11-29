import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPlaylist } from "../../services/playlists";
import "./ViewPlaylist.css";
import Loading from "../../components/Loading/Loading";

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
    const firstVideo = (
      <div className="main-video">
        <div className="video">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <h3 className="title">{playlist.videos[0].videoName}</h3>
        </div>
      </div>
    );
    const playlistData = playlist.videos.map((video, index) => (
      <div key={video._id} className="vid">
        <iframe src={video.videoUrl}></iframe>
        <h3 className="title">{video.videoName}</h3>
      </div>
    ));

    const dummyData = (
      <>
        <div class="vid">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          <h3 class="title">0.1 video title goes here</h3>
        </div>
        <div class="vid">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          <h3 class="title">0.2 video title goes here</h3>
        </div>
        <div class="vid">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          <h3 class="title">0.3 video title goes here</h3>
        </div>
        <div class="vid">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          <h3 class="title">0.4 video title goes here</h3>
        </div>
      </>
    );

    return (
      <div className="container">
        {firstVideo}
        <div className="video-list">
          {playlistData}
          {dummyData}
        </div>
      </div>
    );
  };

  return (
    <body>
      <h1 className="heading">Playlist Gallery</h1>
      {playlist ? loaded() : <Loading />}
    </body>
  );
}

export default ViewPlaylist;
