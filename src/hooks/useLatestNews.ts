import { useQuery } from "@tanstack/react-query";

import { knowivateService } from "../api/services/knowivate-service";

export const useLatestNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latest-news"],
    queryFn: () => knowivateService.getLatestNews(),
  });
  return {
    latestNewsData: data?.news ?? [],
    isLatestNewsLoading: isLoading,
    latestNewsError: error,
  };
};
