import { topHeadlines, everything } from "./ts/service/api";
import newsInterfaceElements from "./ts/config/ui_config";
import { renderNews } from "./ts/views/renderNews";
import { clearContainer } from "./ts/views/clearContainer";

const {
  form,
  countrySelect,
  searchInput,
  newsContainer
} = newsInterfaceElements;

window.addEventListener("load", async () => {
  loadNews();
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    loadNews();
  });
});

async function loadNews(): Promise<void> {
  const country = countrySelect.value;
  const searchText = searchInput.value;

  if (!searchText) {
    const dataNews = await topHeadlines(country);
    renderNews(dataNews);
  } else {
    const dataEvery = await everything(searchText);

    if (!dataEvery.length) {
      clearContainer(newsContainer);
      showErrorMsg("Новости не найдены");
      return;
    }
    renderNews(dataEvery);
  }
}

const showErrorMsg = (msg: string): void => {
  const message: any = document.createElement("p");
  message.innerText = `${msg}`;
  newsContainer.appendChild(message);
};
