
var API_URL = "http://127.0.0.1:8000/api/search_targets";
const TIMEOUT_DURATION = 1000;

const SearchTargetAPI = {
  "getAll": (searchTerm, pageNumber) => {
    let url = API_URL + "?";
    let urlParams = new URLSearchParams({
      page: pageNumber,
      search: searchTerm,
    })
    return fetch(url + urlParams, {
      signal: AbortSignal.timeout(TIMEOUT_DURATION)
    })
  },
}

export default SearchTargetAPI;
