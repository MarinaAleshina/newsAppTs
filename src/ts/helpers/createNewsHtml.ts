export const createNewsElementHtml = ({
  urlToImage,
  title,
  url,
  description
}: any) => {
  return `
    <div class="col">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}" />
          <span class="card-title">${title || ""}</span>
        </div>
        <div class="card-content">
          <p>${url || ""}</p>
        </div>
        <div class="card-action">
          <a href="${description}">Read more</a>
        </div>
      </div>
    </div>
  `;
};
