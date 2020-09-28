import newsInterfaceElements from "../config/ui_config";
import { createNewsElementHtml } from "../helpers/createNewsHtml";
import { clearContainer } from "../views/clearContainer";

const { newsContainer } = newsInterfaceElements;

export const renderNews = <T>(data: T[]) => {
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }

  let fragment: string = "";
  data.forEach(elNews => {
    const NewsElement = createNewsElementHtml(elNews);

    fragment += NewsElement;
  });
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
};
