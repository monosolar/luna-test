import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import Storyboard from './Storyboard'

const useStyles = createUseStyles({
  VideoItem: {
    background: 'aqua',

    height: '100%',

    position: 'absolute',
    left: 30,

    border: '3px dashed',
    boxSizing: 'border-box',
  },
})

const VideoItem = ({ url }) => {
  const classes = useStyles()
  const thisRef = useRef(null)
  const coordinates = useRef({ deltaOffset: null })

  const handleMouseDown = e => {
    const targetLeftOffset = e.target.offsetLeft
    const offsetLeft = e.pageX - e.target.parentElement.offsetLeft
    coordinates.current.deltaOffset = offsetLeft - targetLeftOffset
  }

  const handleMouseUp = () => {
    coordinates.current.deltaOffset = null
  }

  const handleMouseMove = e => {
    if (coordinates.current.deltaOffset && thisRef && thisRef.current) {
      const offsetLeft = e.pageX - coordinates.current.deltaOffset

      if (offsetLeft > 0) {
        thisRef.current.style.left = `${offsetLeft}px`
      }
    }
  }

  return (
    <>
      <div
        ref={thisRef}
        className={classes.VideoItem}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Storyboard url={url} />
      </div>
    </>
  )
}

export default VideoItem
