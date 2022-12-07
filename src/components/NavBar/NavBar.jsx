import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/users";

function NavBar() {
  let navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useAuthContext();
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);

  const SignOut = () => {
    signOut();
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signOut();
    setuserLoggedIn(false);
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const showMore = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };

  function isLoggedIn() {
    return (
      <>
        <Button color="inherit">
          <NavLink to="/createplaylist" style={{ textDecoration: "none" }}>
            Create Playlist
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/userplaylists" style={{ textDecoration: "none" }}>
            My Playlists
          </NavLink>
        </Button>
        <form onClick={handleSubmit}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button type="submit" color="inherit">
              Logout
            </Button>
          </NavLink>
        </form>
      </>
    );
  }

  function isLoggedOut() {
    return (
      <>
        <Button color="inherit">
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            SignUp
          </NavLink>
        </Button>
        <NavLink to="/signin" style={{ textDecoration: "none" }}>
          <Button color="inherit">Login</Button>
        </NavLink>
      </>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/allplaylists" style={{ textDecoration: "none" }}>
              View all Playlist
            </NavLink>
          </Button>
          {user ? isLoggedIn() : isLoggedOut()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
