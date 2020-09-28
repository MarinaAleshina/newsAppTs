export const clearContainer = (container: HTMLDivElement) => {
  let child = container.lastElementChild!;

  while (child) {
    container.removeChild(child)!;
    child = container.lastElementChild!;
  }
};
