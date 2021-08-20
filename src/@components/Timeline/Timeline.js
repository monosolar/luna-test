import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '@components/App/AppProvider'
import VideoItem from '@components/VideoItem'
import { PIXELS_PER_SECOND } from '@common/consts'
import useStyles from './style'



const Slider = () => {
  const classes = useStyles()
  const thisRef = useRef(null)
  const { duration, currentTime } = useContext(AppContext)

  useEffect(() => {
    if (thisRef.current) {
      thisRef.current.style.left = `${currentTime * PIXELS_PER_SECOND}px`
    }
  }, [currentTime])

  return duration ? (
    <div className={classes.Slider} ref={thisRef}>
      <div className={classes.Slider_Triangle}></div>
      <div className={classes.Slider_Vertical}></div>
    </div>
  ) : (
    false
  )
}

const Timeline = () => {
  const classes = useStyles()
  const thisRef = useRef(null)
  const { items } = useContext(AppContext)

  return (
    <div className={classes.Timeline} ref={thisRef}>
      <div className={classes.Timeline_Content}>
        {items.map(({ id, url, name }, idx) => (
          <VideoItem id={id} key={id} name={name} url={url} initLeft={`${idx * 5}rem`} />
        ))}
      </div>
      <Slider />
    </div>
  )
}

export default Timeline
