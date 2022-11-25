import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/users";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  function handleChange(event) {
    const newState = { ...user };
    newState[event.target.name] = event.target.value;
    setUser(newState);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn(user);
    navigate("/", { replace: true });
  };
  return (
    <>
      This is the Sign-in Page
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignIn;
