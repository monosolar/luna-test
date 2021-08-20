import React, { useContext, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { useResizeDetector } from 'react-resize-detector'
import AppContext from './AppContext'
import { PIXELS_PER_SECOND } from './consts'

import Storyboard from './Storyboard'
import VideoItem from './VideoItem'

const useStyles = createUseStyles(() => {
  const borderRadius = '.5rem'

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
    Timeline_Scale: {
      '& time': {
        marginRight: '1rem',
      },
    },
    Slider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 190,
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

  return (
    <div className={classes.Slider} ref={thisRef}>
      <div className={classes.Slider_Triangle}></div>
      <div className={classes.Slider_Vertical}></div>
    </div>
  )
}

const Timeline = ({ items }) => {
  const classes = useStyles()
  const thisRef = useRef(null)
  const { setDuration } = useContext(AppContext)

  return (
    <div className={classes.Timeline} ref={thisRef}>
      <div className={classes.Timeline_Scale}>
        {Array(10)
          .fill()
          .map((item, idx) => (
            <time key={idx}>00:00</time>
          ))}
      </div>
      <div className={classes.Timeline_Content}>
        {items.map(({ id, url, name }, idx) => (
          <VideoItem
            key={id}
            name={name}
            url={url}
            initLeft={`${idx * 5}rem`}
            onMove={() => {
              setDuration(thisRef.current.scrollWidth / PIXELS_PER_SECOND)

              console.log('----->', 'thisRef', thisRef.current.scrollWidth)
            }}
          />
        ))}
      </div>
      <Slider />
    </div>
  )
}

export default Timeline
