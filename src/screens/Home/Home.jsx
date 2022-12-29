import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  const fetchData = async () => {
    const item = await JSON.parse(localStorage.getItem("name"));
    if (item) setuserLoggedIn(!userLoggedIn);
  };

  useEffect(() => {
    fetchData();
  }, [setuserLoggedIn]);

  return (
    <div id="home-page">
      <h2>Welcome to Vidster!</h2>
      <article>
        <p>
          This is a playlist sharing web application built using the MongoDB
          Express React Node.JS as the primary stack. The backend contains data
          modeling for Users, Playlists, and Videos with a search functionality
          to use Google's Youtube API. My functionality for the Youtube API
          leverages Query Strings and Parameters to tailor searches to the
          user's unique request.
        </p>
      </article>
      <br />
      <section>
        <ol>
          <strong>How to start:</strong>
          <li>Create an account</li>
          <li>Create a playlist(or a few)</li>
          <li>Search for Youtube Videos</li>
          <li>Enjoy!</li>
        </ol>
      </section>
    </div>
  );
}

export default Home;
