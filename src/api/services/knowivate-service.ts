import { KNOWIVATE_BASE_URL } from "../../constants/app_constants";
import { knowivateApi } from "../axiosInstance";
import { KNOWIVATE_ENDPOINTS } from "../endpoints";
import type { LatestNewsResponse } from "../types";

export const knowivateService = {
  getLatestNews: async (): Promise<LatestNewsResponse> => {
    const response = await knowivateApi.get(
      `${KNOWIVATE_BASE_URL}${KNOWIVATE_ENDPOINTS.LATEST_NEWS}`
    );
    return response.data;
  },
  getLocalNews: async (): Promise<unknown[]> => {
    const response = await knowivateApi.get(
      `${KNOWIVATE_BASE_URL}${KNOWIVATE_ENDPOINTS.LOCAL_NEWS}`
    );
    return response.data;
  },
  getAgriculturalNews: async (): Promise<unknown[]> => {
    const response = await knowivateApi.get(
      `${KNOWIVATE_BASE_URL}${KNOWIVATE_ENDPOINTS.AGRICULTURAL_NEWS}`
    );
    return response.data;
  },
  getSportsNews: async (): Promise<unknown[]> => {
    const response = await knowivateApi.get(
      `${KNOWIVATE_BASE_URL}${KNOWIVATE_ENDPOINTS.SPORTS_NEWS}`
    );
    return response.data;
  },
  getBusinessNews: async (): Promise<unknown[]> => {
    const response = await knowivateApi.get(
      `${KNOWIVATE_BASE_URL}${KNOWIVATE_ENDPOINTS.BUSINESS_NEWS}`
    );
    return response.data;
  },
  getTechnologyNews: async (): Promise<unknown[]> => {
    const response = await knowivateApi.get(
      `${KNOWIVATE_BASE_URL}${KNOWIVATE_ENDPOINTS.TECHNOLOGY_NEWS}`
    );
    return response.data;
  },
};
