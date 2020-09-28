const newsInterfaceElements: {
  form: HTMLFormElement;
  countrySelect: HTMLSelectElement;
  searchInput: HTMLFormElement;
  newsContainer: HTMLDivElement;
} = {
  form: <HTMLFormElement>document.querySelector("#newsControls"),
  countrySelect: <HTMLSelectElement>document.querySelector("#select-country"),
  searchInput: <HTMLFormElement>document.querySelector("#autocomplited-input"),
  newsContainer: <HTMLDivElement>document.querySelector(".news-container .row")
};

export default newsInterfaceElements;
