import axios from "axios";

const API_URL = "https://api.unsplash.com/";
const API_KEY = "7URfErPpCda_zfTPT05FknSNSXhSl5J4xIoFjZvec_g";

const fetchPhotos = async (query = "", page = 1, perPage = 10) => {
  try {
    let url = `${API_URL}${query ? "search/photos/" : "photos/"}`;

    const response = await axios.get(url, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};
export default fetchPhotos;
