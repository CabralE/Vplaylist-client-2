import { useState } from "react";
import { searchYoutube } from "../../services/video.js";
import Loading from "../../components/Loading/Loading.js";
import "./Video.css";
import maginifysvg from "./magnify.svg";
import { useAuthContext } from "../../hooks/useAuthContext.js";
import { useNavigate } from "react-router-dom";

function Video() {
  const { user } = useAuthContext();
  let navigate = useNavigate();

  const [search, setSearch] = useState({
    word: "",
  });
  const [data, setData] = useState(null);

  const [video, setVideo] = useState({
    videoName: "",
    videoUrl: "",
    videoChannel: "",
  });

  function handleChange(event) {
    const newState = { ...search };
    newState[event.target.name] = event.target.value;
    setSearch(newState);
  }

  const handleYoutubeSearch = async (event) => {
    event.preventDefault();
    const data = await searchYoutube(search);
    console.log("handleYoutubeSearch: ", data);
    setData(data);
  };

  function handleVideoSelection(event) {
    const newState = {
      videoName: data.items[event].snippet.title,
      videoUrl: `https://www.youtube.com/embed/${data.items[event].id.videoId}`,
      videoChannel: data.items[event].snippet.channelTitle,
    };
    setVideo(newState);
  }

  const handlePostingVideo = async (event) => {
    event.preventDefault();
  };

  const loaded = () => {
    const usersPlaylist = user.playlists.map((playlist, index) => {
      const {} = playlist;
      return <option value={index}>{playlist.playlistName}</option>;
    });

    const searchResult = data.items.map((search, index) => {
      return (
        <article className="video-container">
          <iframe
            key={index}
            src={`https://www.youtube.com/embed/${search.id.videoId}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div className="video-bottom-section">
            <img
              className="channel-icon"
              src={
                search.snippet.thumbnails.default ||
                `http://unsplash.it/250/150?gravity=center`
              }
            />

            <div className="video-details">
              <p className="video-title">{search.snippet.title}</p>
              <p className="video-channel-name">
                {search.snippet.channelTitle}
              </p>
              <div className="video-metadata">
                <span>12k views</span>-<span>1 week ago</span>
              </div>
            </div>
          </div>
          <form onclick={handlePostingVideo}>
            <select value={index}>{usersPlaylist}</select>
            <button type="submit"> Add to Playlist</button>
          </form>
        </article>
      );
    });
    return (
      <div className="videos">
        <section className="video-section">{searchResult}</section>
      </div>
    );
  };

  return (
    <div className="youtubeSearchComponent">
      <header className="header">
        <h2 className="youtube-logo">Video</h2>
        <form className="search-bar" onSubmit={handleYoutubeSearch}>
          <input
            className="search-input"
            type="text"
            name="word"
            placeholder="search youtube video"
            value={search.word}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            <img src={maginifysvg} alt="Magnifying SVG" />
          </button>
        </form>
      </header>
      {data ? loaded() : <Loading />}
    </div>
  );
}

export default Video;
