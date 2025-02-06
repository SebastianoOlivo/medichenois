/**
 * Limite Array
 * @param {Array} array
 * @param {Number} limit
 * @returns sliced array
 */
function limit(array, limit) {
    return array.slice(0, limit);
}


/**
 * Limite text
 * @param {String} string
 * @param {Number} limit
 * @returns truncated string
 */
function limitText(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit) + '...';
  } else {
    return string;
  }
}
  
  
export { limit, limitText };