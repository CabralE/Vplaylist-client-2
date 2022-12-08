import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/users";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./SignIn.css";

function SignIn() {
  const { dispatch } = useAuthContext();
  const { user } = useAuthContext();
  let navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const newState = { ...login };
    newState[event.target.name] = event.target.value;
    setLogin(newState);
  }

  useEffect(() => {
    const checkSignIn = () => {
      if (user) {
        navigate("/", { replace: true });
      }
    };
    checkSignIn();
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await signIn(login);
    dispatch({ type: "LOGIN", payload: user });
    navigate("/", { replace: true });
  };

  return (
    <div className="signinbody">
      <div className="center">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <input
              type="text"
              //placeholder="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              required="required"
            />
            <span>Email</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              //placeholder="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              require="required"
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

export default SignIn;
