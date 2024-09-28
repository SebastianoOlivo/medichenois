const now = new Date();

function news(collection) {
  return collection
    .getFilteredByGlob("./src/content/news/*.md")
    .filter((item) => item.data.draft !== true && item.date <= now)
    .reverse();
}

export { news };