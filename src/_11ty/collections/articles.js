const now = new Date();
now.setHours(now.getHours() + 1); 

function articles(collection) {
  return collection
    .getFilteredByGlob("./src/content/articles/*.md")
    .filter((item) => item.data.draft !== true && item.date <= now)
    .reverse();
}

export { articles };