import axios from "axios";

const API_KEY = "33J-hHOVDtSzhZefII_e_EYyB10rzckrD6pig0C11YI";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

axios.defaults.params = {
  orientation: "landscape",
  per_page: 24,
};

// Explicitly define the types for the parameters
export const fetchPhotos = async (param: string, page: number) => {
  const { data } = await axios.get(`search/photos?query=${param}&page=${page}`);
  return data;
};
