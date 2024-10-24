
import ImageDisplay from "./ImageDisplay"
import VideoDisplay from "./VideoDisplay"
import ErrorMediaDisplay from "./ErrorMediaDisplay"
import "./MediaDisplay.css"

import React from "react"

function getMediaCompFromType(type, file_path) {
  switch (type) {
    case "IMAGE":
      return <ImageDisplay className="card-media" file={file_path}/>
    case "VIDEO":
      return <VideoDisplay className="card-media" file={file_path}/>
    default:
      return <ErrorMediaDisplay/>
  }
}

function MediaDisplay({type, file_path}) {
  let mediaComponent = getMediaCompFromType(type, file_path)
  return mediaComponent
}

export default MediaDisplay;