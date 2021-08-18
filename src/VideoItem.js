import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import Storyboard from './Storyboard'

const useStyles = createUseStyles(() => {
  const borderRadius = '1rem'

  return {
    VideoItem: {
      
      height: '100%',
      position: 'absolute',

      border: '3px dashed #261C2C',
      boxSizing: 'border-box',
      borderRadius,
      '& canvas': {
        borderRadius,
      },
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

const VideoItem = ({ name, url }) => {
  const classes = useStyles({ name })
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
        <div className={classes.VideoItem_Curtain}></div>
        <div className={classes.VideoItem_Name}>{name}</div>
      </div>
    </>
  )
}

export default VideoItem
