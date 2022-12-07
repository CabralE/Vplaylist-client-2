import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { getUser } from "../../services/users";
import Loading from "../../components/Loading/Loading.js";

function UserPlaylists() {
  const { user } = useAuthContext();
  const [userplaylists, setuserplaylists] = useState(null);
  /*
  console.log("userPlaylists:", user.playlists);

  const test = () => {
    let newArr = user.playlists.forEach((obj) => <img src={obj.image} />);
    return <>{newArr};</>;
  };

  test(user.playlists);

  const delay = (duration) => {
    return new Promise((res) => {
      setTimeout(res, duration);
    });
  };
  */
  // useEffect(() => {
  //   const fetchPlaylist = async () => {
  //     let userData = await getUser(user_id);
  //     setuserplaylists(userData);
  //   };
  //   fetchPlaylist();
  // }, [id]);

  const playlistsImages = () => {
    const images = userplaylists.forEach((playlistObj) => {
      <img src={playlistObj.image} />;
    });
    return <>{images}</>;
  };

  return (
    <>
      <h1>This will be the user's playlists</h1>
      {user ? <>{<img src={user.playlists[0].image} />}</> : <Loading />}
    </>
  );
}

export default UserPlaylists;
