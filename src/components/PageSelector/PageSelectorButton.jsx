

function PageSelectorButton({btnText, clicCallback, isButtonSelected})  {

  function handleClic() {
    clicCallback(btnText);
  }

  return (
    <div id="page-selector-button">
      <button className={`${isButtonSelected ? "selected" : ""}`} onClick={handleClic}>
        {btnText} 
      </button>
    </div>
    )
}


export default PageSelectorButton;
