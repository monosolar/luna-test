import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import Storyboard from './Storyboard'

const useStyles = createUseStyles(() => {
  const borderRadius = '.5rem'

  return {
    VideoItem: {
      position: 'absolute',
      top: '1rem',
      bottom: '1rem',
      left: ({ initLeft }) => initLeft,
      background: '#261C2C',

      boxSizing: 'border-box',
      borderRadius,

      padding: '.75rem',

      display: 'flex',
      justifyContent: 'space-between',

      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },

    VideoItem_Curtain: {
      width: '100%',
      height: '100%',
      position: 'absolute',

      top: 0,
      left: 0,
      borderRadius,
      background: `linear-gradient(90deg, white 0, transparent 10rem, transparent 100%),
                   linear-gradient(270deg, white 0, transparent 10rem, transparent 100%)`,
    },

    VideoItem_Name: {
      position: 'absolute',
      top: '0.5rem',
      left: '1rem',
    },
  }
})

const VideoItem = ({ name, url, initLeft = 0, onMove = () => {} }) => {
  const classes = useStyles({ initLeft })
  const thisRef = useRef(null)
  const coordinates = useRef({ deltaOffset: null })

  const handleMouseDown = e => {
    const targetLeftOffset = e.target.offsetLeft
    const offsetLeft = e.pageX - e.target.parentElement.offsetLeft
    coordinates.current.deltaOffset = offsetLeft - targetLeftOffset
  }

  const handleMouseOut = () => {
    coordinates.current.deltaOffset = null
    onMove()
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
        onMouseLeave={handleMouseOut}
        onMouseUp={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <Storyboard url={url} />
        <div className={classes.VideoItem_Curtain}></div>
        <div className={classes.VideoItem_Name}>{name}</div>
      </div>
    </>
  )
}

export default VideoItem
