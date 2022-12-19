import api from "./apiConfig";
import axios from "axios";

export const allPlaylists = async () => {
  try {
    let response = await api.get("/playlists");
    let data = await response.data;
    return data;
  } catch (error) {
    console.log(`allPlaylists error: ${error}`);
  }
};

export const postPlaylist = async (data) => {
  try {
    const response = await api.post("/playlists", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPlaylist = async (id) => {
  try {
    let response = await api.get(`/playlists/${id}`);
    let data = await response.data;
    return data;
  } catch (error) {
    console.log(`Fetching playlist error: ` + error);
  }
};

export const updatePlaylist = async (id, playlist) => {
  try {
    // const article = { videos: playlist };
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const response = await api.put(`/playlists/${id}`, playlist, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePlaylist = async (id) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios.delete(
      `https://vplayserver-production.up.railway.app/playlists/${id}`,
      { headers }
    );
  } catch (error) {
    console.log(`Deleting playlist error: ${error}`);
  }
};
