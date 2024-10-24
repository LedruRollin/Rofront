
import "styles/CardHolder.css"
import Card from "components/Card";

import { highlight } from "utils/highlighter";
import Masonry from "react-masonry-css";

function CardHolder({ searchTargetData }) {

  const params = new URLSearchParams(window.location.search)
  let searchText = params.get("search") || ""

  return (
    <div className="card-holder-body">
      <Masonry 
        breakpointCols={3}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {Object.values(searchTargetData).map(searchTarget => ( 
          <Card 
            key={searchTarget.id}
            searchTarget={searchTarget}
            highlightCallback={text => highlight(text, searchText)}
          /> 
        ))}
      </Masonry>

    </div>
  );
}

export default CardHolder;
