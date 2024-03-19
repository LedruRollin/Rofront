

function VideoDisplay({file}) {
  return (
    <video controls className="card-media">
      <source src={file} type="video/mp4" />
    </video>
  )
}

export default VideoDisplay;
