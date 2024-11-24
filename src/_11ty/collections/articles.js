const now = new Date();

function articles(collection) {
  return collection
    .getFilteredByGlob("./src/content/articles/*.md")
    .filter((item) => item.data.draft !== true && item.date <= now)
    .reverse();
}

export { articles };