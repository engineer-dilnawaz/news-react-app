import api from "../axiosInstance";
import { ENDPOINTS } from "../endpoints";

export const newsService = {
  getTopNews: async () => {
    const response = await api.get(ENDPOINTS.GET_TOP_NEWS);
    return response.data;
  },
};
