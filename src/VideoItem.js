import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  VideoItem: {
    background: 'aqua',
    width: 100,
    height: '100%',

    position: 'absolute',
    left: 30,


    border: '3px dashed',
  },
})

const VideoItem = () => {
  const classes = useStyles()
  const thisRef = useRef(null)
  const coordinates = useRef({ deltaOffset: null })

  const moveAt = e => {
    if (coordinates.current.deltaOffset && thisRef && thisRef.current) {
      const offsetLeft =
        e.pageX - e.target.parentElement.offsetLeft - coordinates.current.deltaOffset

      thisRef.current.style.left = `${offsetLeft}px`
    }
  }

  const handleMouseDown = e => {
    const targetLeftOffset = e.target.offsetLeft
    const offsetLeft = e.pageX - e.target.parentElement.offsetLeft
    coordinates.current.deltaOffset = offsetLeft - targetLeftOffset
  }

  const handleMouseUp = () => {
    coordinates.current.deltaOffset = null
  }

  const handleMouseMove = e => {
    moveAt(e)
  }

  return (
    <div
      ref={thisRef}
      className={classes.VideoItem}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      AAA
    </div>
  )
}

export default VideoItem
