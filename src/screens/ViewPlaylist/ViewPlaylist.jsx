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
    };
    fetchPlaylist();
  }, [id]);

  const loaded = () => {
    console.log(playlist);
    const firstVideo = (
      <div className="main-video">
        <div className="video">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <h3 className="title">
            {playlist.videos[0].videoName != null
              ? playlist.videos[0].videoName
              : "No video name"}
          </h3>
        </div>
      </div>
    );
    const playlistData = playlist.videos.map((video, index) => (
      <div key={video._id} className="vid">
        <iframe src={video.videoUrl}></iframe>
        <h3 className="title">
          {video.videoName ? video.videoName : "no video name"}
        </h3>
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
        {playlist ? firstVideo : <p>no data</p>}
        <div className="video-list">
          {playlistData ? playlistData : <p>no playlistData</p>}
          {dummyData}
        </div>
      </div>
    );
  };

  return (
    <body>
      <h1 className="heading">Playlist Gallery</h1>
      <Link to={`/playlist/${id}/edit`}>
        <button>Edit Playlist</button>
      </Link>

      {playlist ? loaded() : <Loading />}
    </body>
  );
}

export default ViewPlaylist;
