export type GetNewsResponse = {
  top_news: TopNews[];
  language: string;
  country: string;
};

type TopNews = {
  news: News[];
};

type News = {
  id: number;
  title: string;
  text: string;
  summary?: string;
  url: string;
  image: string;
  video: null | string;
  publish_date: string;
  author?: string;
  authors: string[];
};
