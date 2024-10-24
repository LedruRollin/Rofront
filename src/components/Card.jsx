
import { useRef, useState } from 'react';

import "styles/Card.css"
import HighlightedText from 'components/TextDisplay/HighlightedText';
import MediaSlider from "components/MediaDisplay/MediaSlider"

import { openPanel } from "store/sidePanel/openPanel"
import { useDispatch } from 'react-redux';

import { useTruncatedElement } from "hooks/useTruncated"


function Card({searchTarget, highlightCallback}) {
  
  const ref = useRef(null);  
  const isTruncated = useTruncatedElement(ref);
  const [showBtnText, setShowBtnText] = useState("Show more");
  const [isFullTextDisplayed, setFullTextDisplayed] = useState(false);
  const dispatch = useDispatch()

  const text = searchTarget.search_text
  const mediaSet = searchTarget.media.length > 0 ? searchTarget.media : null

  function handleShowMoreClic(event) {
    event.stopPropagation()
    if (isTruncated) {
      if (isFullTextDisplayed) {
        setFullTextDisplayed(false);
        setShowBtnText("Show more")
        ref.current.classList.add("restricted")
      } else {
        setFullTextDisplayed(true);
        ref.current.classList.remove("restricted")
        setShowBtnText("Show less")
  }}}

  
  function handleCardClick() {
    dispatch(openPanel(searchTarget))
  }
  

  return (
    <div className="card-content" onClick={handleCardClick}>
      <div className="card-core-text restricted" ref={ref}> 
        <HighlightedText text={text} highlightCallback={highlightCallback}/> 
      </div>
      {isTruncated && <button className="expand-btn" onClick={handleShowMoreClic}>{showBtnText}</button>}
      {mediaSet && <MediaSlider media_paths={mediaSet.map(m => m.file_path)}/>}
    </div>
  );
}


export default Card;
