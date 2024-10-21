function practitioners(collection) {
  return collection
    .getFilteredByGlob("./src/content/practitioners/*.md")
    .sort((a, b) =>  a.data.lastName.localeCompare(b.data.lastName));
};

export { practitioners };