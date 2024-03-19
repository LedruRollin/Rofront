
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "./PageSelector.css"
import { setPageNumber } from "store/pageSelector/selectPage"

import PageSelectorButton from "components/PageSelector/PageSelectorButton";

function PageSelector({dataCount, currentPage}) {
  const postsPerPage = 20;
  const numberPages = Math.floor(dataCount/postsPerPage) + 1
  const currentButtonRange = 2;
  const extremityButtonRange = 0;
  const navigate = useNavigate()
  const dispatch = useDispatch()


  function changeCurrentPage(btnNumber) {
    dispatch(setPageNumber(btnNumber))
    window.scrollTo(0, 0)
  }
  
  function handlePreviousPageClic() {
    const params = new URLSearchParams(window.location.search)
    let previousPageNumber = Math.max(currentPage-1, 1)
    let searchDict = {"page": previousPageNumber}
    if (params.get("search")) {searchDict["search"] = params.get("search")}
    navigate({
      search: createSearchParams(searchDict).toString()
    })
    dispatch(setPageNumber(previousPageNumber))
  }
  
  function handleNextPageClic() {
    const params = new URLSearchParams(window.location.search)
    let nextPageNumber = Math.min(currentPage+1, numberPages)
    let searchDict = {"page": nextPageNumber}
    if (params.get("search")) {searchDict["search"] = params.get("search")}
    navigate({
      search: createSearchParams(searchDict).toString()
    })
    
    dispatch(setPageNumber(nextPageNumber))
  }

  function getBtn(btnNumber) {
    return <PageSelectorButton 
        key={btnNumber} 
        btnText={btnNumber} 
        clicCallback={(_btnNumber) => {
          changeCurrentPage(_btnNumber)
          const params = new URLSearchParams(window.location.search)
          let searchDict = {"page": _btnNumber}
          if (params.get("search")) {searchDict["search"] = params.get("search")}
          navigate({
            search: createSearchParams(searchDict).toString(),
            // page: _btnNumber,
          })
        }}
        isButtonSelected={currentPage === btnNumber}
      />
  }

  function getBtnArray(currentPage, totalPagesNb) {
    if (totalPagesNb <= 0) {throw new Error("Unexpected page number " + totalPagesNb)}
    if (totalPagesNb <= 6) {return [...Array(totalPagesNb).keys()].map(i => getBtn(i+1))}
    let btnArray = [];
    let nbBtnArray = [];
    var i;
    for (i=1; i<=1+extremityButtonRange; i++) {
      if (1 <= i <= totalPagesNb) {btnArray.push(getBtn(i)); nbBtnArray.push(i)}
    }

    if (extremityButtonRange + 1 + 1 < currentPage - currentButtonRange) {btnArray.push(<button key={"ltd"}> ... </button>)}
    for (i=Math.max(1, currentPage - currentButtonRange); i<=Math.min(totalPagesNb, currentPage + currentButtonRange); i++) {
      if (1 <= i <= totalPagesNb && !nbBtnArray.includes(i)) {btnArray.push(getBtn(i)); nbBtnArray.push(i)}
    }

    if (currentPage + currentButtonRange + 1 < totalPagesNb - extremityButtonRange) {btnArray.push(<button key={"rtd"}> ... </button>)}
    for (i=totalPagesNb - extremityButtonRange; i<=totalPagesNb; i++) {
      if (1 <= i <= totalPagesNb && !nbBtnArray.includes(i)) {btnArray.push(getBtn(i))}
    }
    return btnArray
  }


  return (
    <div className="page-selector">
      {currentPage !== 1 && <button onClick={handlePreviousPageClic}> &lt; </button>}
      {getBtnArray(currentPage, numberPages)}
      {currentPage !== numberPages && <button onClick={handleNextPageClic}> &gt; </button>}
    </div>
  )
}


export default PageSelector;

