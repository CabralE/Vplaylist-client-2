import { createContext, useReducer, useEffect } from "react";
import { verifyUser } from "../services/users.js";

export const AuthContext = createContext();

const UserAuthAction = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case UserAuthAction.LOGIN:
      return { user: action.payload };
    case UserAuthAction.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
