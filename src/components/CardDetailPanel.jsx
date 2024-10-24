
import { useDispatch, useSelector } from "react-redux";

import 'styles/CardDetailPanel.css';

import MediaDisplay from "components/MediaDisplay/MediaDisplay";
import HighlightedText from "components/TextDisplay/HighlightedText"

import { closePanel } from "store/sidePanel/openPanel"
import { getLinksFromString } from "utils/stringUtils"
import { highlight } from "utils/highlighter";


function CardDetailPanel() {
  const isOpen = useSelector((state) => {
    return state.panel.panelOpened
  })
  const searchTarget = useSelector((state) => {
    return state.panel.panelData
  })
  const dispatch = useDispatch()

  const insideLinks = getLinksFromString(searchTarget.search_text || "")
  const params = new URLSearchParams(window.location.search)
  let searchText = params.get("search") || ""

  return (isOpen && searchTarget) ? (
  // return (isOpen) ? (
    <div className='card-detail-panel'>
      <div className='card-detail-panel-layout'>
        <button id="close-button" onClick={() => {dispatch(closePanel())}}></button>
        <HighlightedText text={searchTarget.search_text} highlightCallback={text => highlight(text, searchText)}/> 
        <ul>
          <li>
            <div> <a href={searchTarget.original_url} rel="noreferrer"> External source </a> </div>
          </li>
          <li>
            <div> Insertion date : {
              new Date(searchTarget.insertion_date + " " + searchTarget.insertion_time).toLocaleString()
            } </div>
          </li>
          {insideLinks.length !== 0 && 
            <li>
              <div> Inside links : 
                <ul>
                  {insideLinks.map(
                    (link, index) => <li key={index}> <a href={link}> link{index+1} </a> </li>
                  )
                  }
                </ul>
              </div>
            </li>
          }
        </ul>
        <div> {
          searchTarget.media.map(
            media => <MediaDisplay key={media.id} type={media.type} file_path={media.file_path}/>
          )
        } </div>
      </div>
    </div>
  ) : null

}


export default CardDetailPanel;
