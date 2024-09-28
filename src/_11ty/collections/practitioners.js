const now = new Date();

function practitioners(collection) {
  return collection
    .getFilteredByGlob("./src/content/practitioners/*.md")
    .sort((a, b) =>  a.data.surname.localeCompare(b.data.surname));
};

export { practitioners };