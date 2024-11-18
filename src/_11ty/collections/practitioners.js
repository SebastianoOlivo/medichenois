function practitioners(collection) {
  return collection.getFilteredByGlob("./src/content/practitioners/*.md")
                   .sort((a, b) =>  a.data.lastName.localeCompare(b.data.lastName));
};

function practitionersPerCategory(collection) {
  return collection.getFilteredByGlob("./src/content/practitioners/*.md")
                   .reduce((practitionersPerCategory, practitioner) => {
                     practitionersPerCategory[practitioner.data.category] = [...practitionersPerCategory[practitioner.data.category] || [], practitioner].sort((a, b) =>  console.log("sort a", a.data.lastName, "sorte b", b.data.lastName)) ;
                     return practitionersPerCategory;
                   }, {});
};

export { practitionersPerCategory, practitioners };
