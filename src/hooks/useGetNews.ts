import { useQuery } from "@tanstack/react-query";

import { newsService } from "../api/services/news-service";

export const useGetNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-news"],
    queryFn: () => newsService.getTopNews(),
  });

  return {
    topNewsData: data,
    isTopNewsLoading: isLoading,
    topNewsError: error,
  };
};
