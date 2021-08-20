import { AppContext } from '@components/App/AppProvider'
import React, { useContext, useRef } from 'react'
import { getRectRelativeToParent } from '@common/utils'
import { PIXELS_PER_SECOND } from '@common/consts'
import Storyboard from '@components/Storyboard'
import useStyles from './style'

const VideoItem = ({ id, name, url, initLeft = 0 }) => {
  const classes = useStyles({ initLeft })
  const thisRef = useRef(null)
  const coordinates = useRef({ deltaOffset: null })
  const { setRect: setContextRect } = useContext(AppContext)

  const handleMouseDown = e => {
    const targetLeftOffset = e.target.offsetLeft
    const offsetLeft = e.pageX - e.target.parentElement.offsetLeft
    coordinates.current.deltaOffset = offsetLeft - targetLeftOffset
  }

  const handleMouseOut = () => {
    setRect()

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

  const handleDuration = duration => {
    thisRef.current.style.width = `${duration * PIXELS_PER_SECOND}px`

    setRect()
  }

  const setRect = () => {
    const parentElement = thisRef.current.parentElement
    const resultRect = getRectRelativeToParent(
      thisRef.current.getBoundingClientRect(),
      parentElement.getBoundingClientRect()
    )

    setContextRect(id, resultRect)
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
        <Storyboard url={url} onDuration={handleDuration} />
        <div className={classes.VideoItem_Curtain}></div>
        <div className={classes.VideoItem_Name}>{name}</div>
      </div>
    </>
  )
}

export default VideoItem
