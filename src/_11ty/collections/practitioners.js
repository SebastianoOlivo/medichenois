
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
  const practitioners = collection.getFilteredByGlob("./src/content/team/*.md");

  // Group practitioners by category
  const groupedPractitioners = practitioners.reduce((grouped, practitioner) => {
    const category = practitioner.data.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(practitioner);
    return grouped;
  }, {});

  // Sort each category by lastName
  Object.keys(groupedPractitioners).forEach(category => {
    groupedPractitioners[category].sort((a, b) =>
      a.data?.lastName.localeCompare(b.data?.lastName)
    );
  });
  return groupedPractitioners;
}

export { practitionersPerCategory, practitioners };