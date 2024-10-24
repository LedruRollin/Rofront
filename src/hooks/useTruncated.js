
import { useLayoutEffect, useState } from 'react';

/**
 *  Function to detect whether an element has been truncated or not
 */ 
function isElementTruncated(element) {
  return element.offsetHeight < element.scrollHeight
}



export function useTruncatedElement(DOMref) {
  const [isTruncated, setIsTruncated] = useState(false);

  function truncatedSetter(DOMref) {
    const { offsetHeight, scrollHeight } = DOMref.current || {};
      if (!offsetHeight || !scrollHeight) { 
        setIsTruncated(false) 
      } else {
        setIsTruncated( 
          isElementTruncated(DOMref.current) 
        )
      }
  }

  window.addEventListener('resize', () => {truncatedSetter(DOMref)});
  useLayoutEffect(() => {
    truncatedSetter(DOMref)
  }, [DOMref]);

  return isTruncated;
};
