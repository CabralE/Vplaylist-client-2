import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  }
  console.log("this is verify user!");
  return false;
};

//for Dev purposes
export const getAllUsers = async () => {
  try {
    const resp = await api.get("/users");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const resp = await api.get(`/users/id/${id}`);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUserPlaylists = async (credentials, data) => {
  try {
    const user = await getUser(credentials);
    user.playlists.push(data);
    const response = await api.put(`/user/${credentials}`, user.playlists);
    return response;
  } catch (error) {
    throw error;
  }
};

//for Dev purposes
export const getUsername = async (name) => {
  try {
    const resp = await api.get(`/users/username/${name}`);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

//for Dev purposes
export const updateUser = async (credentials, data) => {
  try {
    const resp = await api.put(`/users/id/${credentials}`, data);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (credentials) => {
  try {
    const resp = await api.delete(`/users/id/${credentials}`);
    localStorage.removeItem("token");
    return resp.data;
  } catch (error) {
    throw error;
  }
};
