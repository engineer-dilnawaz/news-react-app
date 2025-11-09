import { useQuery } from "@tanstack/react-query";

import { newsService } from "../api/services/news-service";
import { formattedDate } from "../utils";
import { useSelectedCountry } from "../store";

export const useGetNews = (date?: string) => {
  const { selectedCountry } = useSelectedCountry((state) => state);

  const { data, isLoading, error } = useQuery({
    queryKey: ["top-news"],
    queryFn: () =>
      newsService.getTopNews({
        sourceCountry: selectedCountry.code,
        date: date ?? formattedDate(),
      }),
  });

  return {
    topNewsData: data?.top_news ?? [],
    isTopNewsLoading: isLoading,
    topNewsError: error,
  };
};
