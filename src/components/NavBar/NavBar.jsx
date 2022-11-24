import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

function NavBar() {
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
          <Button color="inherit">
            <NavLink to="/createplaylist" style={{ textDecoration: "none" }}>
              Create Playlist
            </NavLink>
          </Button>
          <Button color="inherit">View all Playlist</Button>

          <Button color="inherit">
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              SignUp
            </NavLink>
          </Button>
          <NavLink to="/signin" style={{ textDecoration: "none" }}>
            <Button color="inherit">Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
