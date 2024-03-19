import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CardView from 'components/CardView';
import CardDetailPanel from 'components/CardDetailPanel';

import "styles/MainBody.css"
import { closePanel } from "store/sidePanel/openPanel"
import { fetchSearchTargetData } from "store/dataRetriever/searchTargetRetriever"
import { setPageNumber } from "store/pageSelector/selectPage"

import store from 'store/store';


function refreshPage() {
  const URLparams = new URLSearchParams(window.location.search)
  let search = URLparams.get("search") || ""
  let page = URLparams.get("page") || "1"
  
  // TODO: Avoid (see https://redux.js.org/style-guide/#avoid-dispatching-many-actions-sequentially)
  store.dispatch(fetchSearchTargetData({"search": search, "page": Number(page)}))
  store.dispatch(setPageNumber(Number(page)))
}  


function MainBody() {
  const [ searchParams ] = useSearchParams();

  // Any detected URL search params changes will cause page reloading
  useEffect(() => {
    refreshPage()
    store.dispatch(closePanel())
  }, [ searchParams ])

  return (
    <div className="main-body">
      <CardView/>
      <CardDetailPanel/>
    </div>
  )

}

export default MainBody;
