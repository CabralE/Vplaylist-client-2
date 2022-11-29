import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import Loading from "../../components/Loading/Loading.js";

function UserPlaylists() {
  const { user } = useAuthContext();
  const [userplaylists, setuserplaylists] = useState(null);

  return (
    <>
      <h1>This will be the user's playlists</h1>
      {userplaylists ? JSON.stringify(userplaylists) : <Loading />}
      {user ? JSON.stringify(user) : <p>user doesn't exist</p>}
    </>
  );
}

export default UserPlaylists;
