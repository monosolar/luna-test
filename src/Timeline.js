import React, { useContext, useEffect, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { AppContext } from '@components/App/AppProvider'

import { PIXELS_PER_SECOND } from './consts'

import VideoItem from '@components/VideoItem'

const useStyles = createUseStyles(() => {
  return {
    Timeline: {
      backgroundColor: '#5C527F',
      position: 'relative',
      overflowX: 'scroll',
      overflowY: 'hidden',
    },
    Timeline_Content: {
      position: 'relative',
      height: '10rem',
    },

    Slider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
    },
    Slider_Triangle: {
      width: '0',
      height: '0',
      borderLeft: '.5rem solid transparent',
      borderRight: '.5rem solid transparent',
      borderTop: '.75rem solid #F05454',
    },

    Slider_Vertical: {
      position: 'absolute',
      top: 0,
      left: 'calc(50% - .12rem)',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderLeft: '.2rem solid #F05454',
      height: '100%',
    },
  }
})

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
