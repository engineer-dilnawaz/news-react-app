export type LatestNewsResponse = {
  success: boolean;
  message: string;
  news: LatestNews[];
};
export type LatestNews = {
  source: Source;
  _id: string;
  url: string;
  __v: number;
  advertisementLabel: string;
  categories: string[];
  countryCode: null;
  createdAt: string;
  description: string;
  isAdvertisement: boolean;
  publishedAt: string;
  stateCode: null;
  title: string;
  topics: string[];
  updatedAt: string;
  urlToImage: string;
};

type Source = {
  id: null | string;
  name: string;
  website: string;
};
