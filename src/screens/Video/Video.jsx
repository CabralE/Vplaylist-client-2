import { useState } from "react";
import {
  searchYoutube,
  postVideo,
  getAllVideos,
} from "../../services/video.js";
import { updatePlaylist } from "../../services/playlists.js";
import Loading from "../../components/Loading/Loading.js";
import "./Video.css";
import maginifysvg from "./magnify.svg";
import { useAuthContext } from "../../hooks/useAuthContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Video() {
  const { user } = useAuthContext();
  let navigate = useNavigate();

  const [search, setSearch] = useState({
    word: "",
  });
  const [data, setData] = useState(null);

  const [playlist, setPlaylist] = useState({});

  const [video, setVideo] = useState({
    videoName: "",
    videoUrl: "",
    videoChannel: "",
  });

  function handleChange(event) {
    let newState = { ...search };
    newState[event.target.name] = event.target.value;
    setSearch(newState);
  }

  const handleChangePlaylist = (event) => {
    let selectedPlaylist = user.playlists.filter(
      (arr) => arr.playlistName === event.target.value
    );
    setPlaylist(selectedPlaylist);
  };

  const handleYoutubeSearch = async (event) => {
    event.preventDefault();
    const data = await searchYoutube(search.word);
    setData(data);
  };

  const handleVideoSelection = (individualData) => {
    const newState = {
      videoName: individualData.snippet.title,
      videoUrl: `https://www.youtube.com/embed/${individualData.id.videoId}`,
      videoChannel: individualData.snippet.channelTitle,
    };
    setVideo(newState);
  };

  const handlePostingVideo = async (event) => {
    event.preventDefault();
    let uniqueKey = await event.target.id;
    let uniqueItem = await data.items[uniqueKey];

    // make post request to video
    handleVideoSelection(uniqueItem);
    setTimeout(() => {
      postVideo(video);
    }, 500);
    // await postVideo(video);

    // make get request to video
    let allVideos = await getAllVideos();
    let lastVideoPosted = await allVideos[allVideos.length - 1];

    // make put request to playlist, then insert unique video id
    let arr = playlist[0]?.videos;
    arr.push(lastVideoPosted._id);
    const addVideoId = { videos: arr };
    await updatePlaylist(playlist[0]._id, addVideoId);
  };

  const loaded = () => {
    const searchResult = data.items.map((search, index) => {
      return (
        <div key={index}>
          <article className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${search.id.videoId}`}
              frameBorder="0"
              allowFullScreen
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
            <form>
              <input
                list="playlist-options"
                name="browser"
                id="browser"
                placeholder="Choose a Playlist"
                onChange={handleChangePlaylist}
                required
              ></input>
              <datalist id="playlist-options">
                {user.playlists.map((playlist, playlistIndex) => {
                  return (
                    <option
                      value={playlist.playlistName}
                      key={playlistIndex}
                      id={playlistIndex}
                    />
                  );
                })}
              </datalist>

              <button
                key={index}
                id={index}
                className={index}
                type="submit"
                onClick={handlePostingVideo}
              >
                Add to Playlist
              </button>
            </form>
          </article>
        </div>
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
