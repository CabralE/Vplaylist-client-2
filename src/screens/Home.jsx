import { useState, useEffect } from "react";

function Home() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  const fetchData = async () => {
    const item = await JSON.parse(localStorage.getItem("name"));
    if (item) setuserLoggedIn(!userLoggedIn);
  };

  useEffect(() => {
    fetchData();
  }, [setuserLoggedIn]);

  return <div>This is the Home Page!</div>;
}

export default Home;
