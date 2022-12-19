import api from "./apiConfig";

export const searchYoutube = async (word) => {
  try {
    let response = await api.get(`/search/${word}`);
    let data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const postVideo = async (data) => {
  try {
    const response = await api.post("/videos", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllVideos = async () => {
  try {
    const response = await api.get("/videos");
    return response.data;
  } catch (error) {
    throw error;
  }
};
