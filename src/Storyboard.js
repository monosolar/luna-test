import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Storyboard_Video: {
    display: 'none',
    height: '100%',
  },
  Storyboard_Canvas: {
    
  },
})

const Storyboard = ({ url }) => {
  const classes = useStyles()
  const canvasRef = useRef(null)
  const videoRef = useRef(null)

  const handleSeeked = () => {
    const canvas = canvasRef.current
    const video = videoRef.current

    canvas
      .getContext('2d')
      .drawImage(video, (video.videoWidth / 2 + 10) * video.currentTime, 0)

    console.log('----->', 'onTimeUpdate', video.currentTime, video.duration)

    if (video.currentTime < video.duration) {
      setCurrentTime(video.currentTime + 1)
    }
  }
  const setCurrentTime = value => {
    const video = videoRef.current

    video.currentTime = value
  }

  const handleLoadedData = e => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const parentHeight = e.target.parentElement.getBoundingClientRect().height //e.target.parentElement.offsetHeight
    console.log(
      '----->',
      'e.target.parentElement',
      e.target.parentElement.getBoundingClientRect()
    )
    canvas.width = video.duration * 50
    canvas.height = parentHeight - 6
    const scaleValue = parentHeight / video.videoHeight

    var ctx = canvas.getContext('2d')
    ctx.scale(scaleValue, scaleValue)
    console.log(
      '----->',
      'onLoadedData',
      video.height,
      video.videoHeight,
      e.target.parentElement.offsetHeight
    )

    setCurrentTime(0)
  }

  return (
    <>
      <canvas ref={canvasRef} className={classes.Storyboard_Canvas} />
      <video
        className={classes.Storyboard_Video}
        ref={videoRef}
        onLoadedData={handleLoadedData}
        onSeeked={handleSeeked}
        crossOrigin='anonymous'
        src={url}
      />
    </>
  )
}

export default Storyboard
