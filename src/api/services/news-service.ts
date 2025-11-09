import api from "../axiosInstance";
import { ENDPOINTS } from "../endpoints";
import type { GetNewsParams, GetNewsResponse } from "../types/GetNews";

export const newsService = {
  getTopNews: async (params?: GetNewsParams) => {
    const {
      sourceCountry = params?.sourceCountry ?? "us",
      language = params?.language ?? "en",
      date = params?.date ?? "2025-11-09",
    } = params ?? {};

    const response = await api.get<GetNewsResponse>(
      `${ENDPOINTS.GET_TOP_NEWS}?source-country=${sourceCountry}&language=${language}&date=${date}`
    );

    return response.data;
  },
};
