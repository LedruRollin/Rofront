
import { useState } from 'react';

function PageSelectorButton({btnText, clicCallback, isButtonSelected})  {

  const [isSelected, setSelected] = useState(isButtonSelected ? isButtonSelected : false);

  function handleClic() {
    clicCallback(btnText);
  }

  return (
    <div id="page-selector-button">
      <button className={`${isSelected ? "selected" : ""}`} onClick={handleClic}>
        {btnText} 
      </button>
    </div>
    )
}


export default PageSelectorButton;
