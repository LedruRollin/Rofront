
/**
 * Highlight function returning given `text` with all portion matching
 * `searchText` highlighted
 */
export function highlight(text, searchText) {
  if (searchText === "") { return text}
  let pattern = searchText.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${pattern})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) => (
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  ))
}