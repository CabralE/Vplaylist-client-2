import { Container, TextField, Grid, Typography, Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/users";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./SignUp.css";

function SignUp() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(event) {
    const newState = { ...newUser };
    newState[event.target.name] = event.target.value;
    setNewUser(newState);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(newUser);
    navigate("/signup", { replace: true });
  };

  return (
    <div className="signupbody">
      <div className="center">
        <h1 className="title">Sign-up</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              required="required"
            />
            <span>Username</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              required="required"
            />
            <span>Email</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              name="password"
              value={newUser.password}
              onChange={handleChange}
              required="required"
            />
            <span>Password</span>
          </div>
          <div className="inputbox">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
