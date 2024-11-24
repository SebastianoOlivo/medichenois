
// Function to move an element to the last position
const moveToLast = (array, predicate) => {
  const index = array.findIndex(predicate);
  if (index !== -1) {
    const [itemToMove] = array.splice(index, 1);
    array.push(itemToMove);
  }
};

function practitioners(collection) {
  const sortedCollection = collection.getFilteredByGlob("./src/content/team/*.md")
                                     .sort((a, b) => a.data?.lastName.localeCompare(b.data?.lastName));
  moveToLast(sortedCollection, item => item.data.jobTitle === "Laboratoire");
  return sortedCollection;

};

function practitionersPerCategory(collection) {
  return collection.getFilteredByGlob("./src/content/team/*.md")
                   .reduce((practitionersPerCategory, practitioner) => {
                     practitionersPerCategory[practitioner.data.category] = [...practitionersPerCategory[practitioner.data.category] || [], practitioner];
                     return practitionersPerCategory;
                   }, {});
};

export { practitionersPerCategory, practitioners };