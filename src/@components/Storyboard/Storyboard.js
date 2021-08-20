import React, { useRef, useState } from 'react'
import useStyles from './style'

const Storyboard = ({ url, onDuration = () => {} }) => {
  const classes = useStyles()
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const mutableDataRef = useRef({ videoStep: 1 })

  const [images, setImages] = useState([])

  const handleSeeked = () => {
    const canvas = canvasRef.current
    const video = videoRef.current

    const ctx = canvas.getContext('2d')

    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)

    setImages([...images, canvas.toDataURL('image/png')])

    if (video.currentTime < video.duration) {
      setCurrentTime(video.currentTime + mutableDataRef.current.videoStep)
    }
  }
  const setCurrentTime = value => {
    const video = videoRef.current

    video.currentTime = value
  }

  const handleLoadedData = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    console.log('----->', 'onLoadedData')
    const ratio = video.videoWidth / video.videoHeight

    // 128 + 50
    mutableDataRef.current.videoStep = 2
    onDuration(video.duration)
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
      {/* {images.map(image => (
        <img className={classes.Storyboard_Image} src={image} key={image} />
      ))} */}
    </>
  )
}

export default Storyboard
