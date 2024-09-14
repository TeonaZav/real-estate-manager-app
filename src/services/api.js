import axios from "axios";

const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const accessToken = "9d00da84-001f-4679-be39-18745fe9a14c";

export const addNewListing = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/real-estates`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to create a real estate listing:", error);
  }
};

export const addNewAgent = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/agents`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create new agent", error);
  }
};
