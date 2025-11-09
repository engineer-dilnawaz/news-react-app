export type LocalNews = {
  success: boolean;
  message: string;
  news: News[];
};

export type News = {
  source: Source;
  _id: string;
  url: string;
  __v: number;
  advertisementLabel: string;
  categories: unknown[];
  countryCode: string;
  createdAt: string;
  description: string;
  isAdvertisement: boolean;
  publishedAt: string;
  stateCode: string;
  title: string;
  topics: unknown[];
  updatedAt: string;
  urlToImage: string;
};

type Source = {
  id: string;
  name: string;
  website: string;
};
