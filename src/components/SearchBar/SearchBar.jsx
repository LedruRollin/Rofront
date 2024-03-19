
import { useEffect, useRef } from "react";

/**
 * A component handling search through user input
 */
function SearchBar({ defaultInput, onSearchCallback }) {
  const inputDOMElementRef = useRef(null)

  useEffect(() => {
    inputDOMElementRef.current.value = defaultInput
  }) 

  function handleClic(event) {
    event.preventDefault();
    const textValue = inputDOMElementRef.current.value
    onSearchCallback(textValue)
  }

  return (
    <div>
      <form>
        <input type='search' placeholder="Search..." ref={inputDOMElementRef}/>
        <button type='submit' onClick={handleClic}>Entrer</button>
      </form>
    </div>
  )
}

export default SearchBar;
