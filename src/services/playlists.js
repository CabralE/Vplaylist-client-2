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