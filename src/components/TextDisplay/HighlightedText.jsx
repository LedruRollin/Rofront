
import PropTypes from 'prop-types';


/**
 * A component handling display of raw text, with possible highlighting
 */
const HighlightedText = ({ text, highlightCallback }) => {
  return (
    <span>
      {highlightCallback(text)}
   </span>
  )
}

HighlightedText.propTypes = {
  text: PropTypes.string,
  highlightCallback: PropTypes.func,
}

HighlightedText.defaultProps = {
  text: "",
  highlightCallback: (text) => {return text}
}


export default HighlightedText;
