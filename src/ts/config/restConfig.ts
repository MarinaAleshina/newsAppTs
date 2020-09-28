type NewsApi = {
  apiKey: string;
  country?: string;
  urlApi?: string;
  urlEverything?: string;
  quest?: string;
};

const restConfig: NewsApi = {
  apiKey: "969d272ad02342a887202f0c254b58ca",
  country: "ua",
  urlApi: "https://newsapi.org/v2/top-headlines",
  urlEverything: "https://newsapi.org/v2/everything"
};

export default restConfig;
