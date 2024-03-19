
import "styles/CardHolder.css"
import Card from "components/Card";

import { highlight } from "utils/highlighter";

function CardHolder({ searchTargetData }) {

  const params = new URLSearchParams(window.location.search)
  let searchText = params.get("search") || ""

  return (
    <div className="card-holder-body">

      {Object.values(searchTargetData).map(searchTarget => ( 
        <Card 
          key={searchTarget.id}
          searchTarget={searchTarget}
          highlightCallback={text => highlight(text, searchText)}
        /> 
      ))}

    </div>
  );
}

export default CardHolder;
