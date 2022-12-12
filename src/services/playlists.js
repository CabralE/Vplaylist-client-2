import api from "./apiConfig";

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
    const response = await api.put(`/playlist/${id}`, playlist);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePlaylist = async (id) => {
  try {
    let response = await api.delete(`/playlists/${id}`);
    return response;
  } catch (error) {
    console.log(`Deleting playlist error: ${error}`);
  }
};
