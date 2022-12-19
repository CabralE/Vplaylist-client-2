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
    <>
      <h2>Home Page</h2>
      <section>Section One</section>
      <section>Section two</section>
      <section>Section three</section>
    </>
  );
}

export default Home;
