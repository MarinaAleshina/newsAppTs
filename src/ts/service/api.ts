import restConfig from "../config/restConfig";

const { apiKey, urlApi, urlEverything } = restConfig;
interface News {
  articles: string;
}

export const topHeadlines = async (country: string): Promise<News[]> => {
  const api = `${urlApi}?country=${country}&apiKey=${apiKey}`;

  const res = await fetch(api);
  const news = await res.json();

  return news.articles;
};

export const everything = async (q: string): Promise<News[]> => {
  const apiEvery = `${urlEverything}?q=${q}&apiKey=${apiKey}`;
  const resEvery = await fetch(apiEvery);
  const newsEvery = await resEvery.json();

  return newsEvery.articles;
};
