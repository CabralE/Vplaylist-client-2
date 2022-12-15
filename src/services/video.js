import api from "./apiConfig";

export const searchYoutube = async (word) => {
  try {
    let response = await api.get(`/search/${word}`);
    console.log(response);
    let data = await response.data;
    console.log("search data: ", data);
    return data;
  } catch (error) {
    throw error;
  }
};
