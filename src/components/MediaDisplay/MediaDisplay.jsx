
import ImageDisplay from "./ImageDisplay"
import VideoDisplay from "./VideoDisplay"
import "./MediaDisplay.css"

import React from "react"

function getMediaCompFromType(type, file) {
  switch (type) {
    case "IMAGE":
      return <ImageDisplay className="card-media" file={file}/>
    case "VIDEO":
      return <VideoDisplay className="card-media" file={file}/>
    default:
      throw new Error("Missing media type " + type)
  }
}

function MediaDisplay({type, file}) {
  let mediaComponent = getMediaCompFromType(type, file)
  return mediaComponent
}

export default MediaDisplay;