
var API_URL = "http://127.0.0.1:8000/api/media";
const TIMEOUT_DURATION = 1000;

const MediaAPI = {
  "get": (mediaId) => {
    let url = API_URL + "/" + mediaId;
    return fetch(url, {
      signal: AbortSignal.timeout(TIMEOUT_DURATION)
    })
  },
}

export default MediaAPI;
