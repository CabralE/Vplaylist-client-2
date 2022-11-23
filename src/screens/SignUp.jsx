import { Container, TextField, Grid, Typography, Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/users";
import { useAuthContext } from "../hooks/useAuthContenxt";
// import { useActionData } from "react-router-dom";
/*
  const { dispatch } = useAuthContext();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const user = await signUp(form);
      dispatch({ type: "LOGIN", payload: user });
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  */
// const usernameRef = useRef();
// const emailRef = useRef();
// const passwordRef = useRef();

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
  // const handleChange = (e) => {
  //   const { username, email, password } = e.target;
  //   console.log("e", e);
  //   setNewUser((prev) => ({
  //     ...prev,
  //     username: username,
  //     email: email,
  //     password: password,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(newUser);
    navigate("/signup", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={newUser.username}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={newUser.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="password"
        name="password"
        value={newUser.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    /*
    <Container component="main" maxWidth="md">
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="username"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              // ref={usernameRef}
              value={newUser.username}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // ref={emailRef}
              value={newUser.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // ref={passwordRef}
              value={newUser.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          maxWidth={"md"}
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </Container>
    */
  );
}

export default SignUp;
