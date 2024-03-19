

/**
 * Returns an array of links contained in given string
 */
export function getLinksFromString(string) {
  var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
  return string.match(urlRegex) || [];
}


/**
 * Returns whether given string represents a strictly positive integer
 */
export function isStringValidPageNumber(string) {
  return /^[1-9]\d*$/.test(string);
}
