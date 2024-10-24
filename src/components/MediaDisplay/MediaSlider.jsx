
import "./MediaSlider.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function MediaSlider({media_paths}) {
  return (
    <div className="card-media">
      <AwesomeSlider 
        infinite={false}
        bullets={false}
        transitionDelay={10}
      >
        {media_paths.map(
          media_path => <div data-src={media_path} key={media_path}></div>
        )}        
      </AwesomeSlider>
    </div>
  )
}


export default MediaSlider;
