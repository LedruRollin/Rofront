import { useSelector } from "react-redux";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

import "styles/CardView.css"

import SearchBar from "components/SearchBar/SearchBar"
import CardHolder from "components/CardHolder"
import PageSelector from 'components/PageSelector/PageSelector';
import ErrorBar from "components/ErrorComponents/ErrorBar";
import loadingGif from "assets/loading.gif"


function CardView() {

  // TODO: We could move these selectors back to state logic place 
  // (see https://redux-toolkit.js.org/api/createslice#selectors-1)
  const currentPage = useSelector(state => state.page.pageNumber)
  const errorMessage = useSelector(state => state.data.error)
  const loading = useSelector(state => state.data.loading)
  const dataCount = useSelector(state => state.data.searchTargets["total-count"])
  const searchTargetData = useSelector(state => state.data.searchTargets["data"])
  const navigate = useNavigate()
  const [ searchParams ] = useSearchParams();
  let urlSearch = searchParams.get("search")

  function navigateFromSearch(textValue) {
    navigate({
      search: createSearchParams({
        "search": textValue
      }).toString()
    })
  }

  return (
    <div className="main-view">
      <SearchBar defaultInput={urlSearch} onSearchCallback={navigateFromSearch}/>
      
      {loading && <img src={loadingGif} alt='Chargement' />}
      {errorMessage && <ErrorBar errorString={errorMessage} />}
      {(!loading && !errorMessage) && <PageSelector 
        dataCount={dataCount} 
        currentPage={currentPage}
      />}
      {!errorMessage && <CardHolder 
        searchTargetData={searchTargetData}
      />}
      {(!loading && !errorMessage) && <PageSelector 
        dataCount={dataCount} 
        currentPage={currentPage}
      />}
    </div>
  )
}

export default CardView;
