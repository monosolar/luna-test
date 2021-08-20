import React, { useRef, useState } from 'react'
import useStyles from './style'

const Storyboard = ({ url, onDuration = () => {} }) => {
  const classes = useStyles()
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const dataRef = useRef({ captureStep: 1 })

  const [images, setImages] = useState([])

  const handleSeeked = () => {
    const canvas = canvasRef.current
    const video = videoRef.current
    const captureStep = dataRef.current.captureStep

    const ctx = canvas.getContext('2d')

    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)

    setImages([...images, canvas.toDataURL('image/png')])

    if (video.currentTime < video.duration) {
      setCurrentTime(video.currentTime + captureStep)
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

    dataRef.current.captureStep = video.duration / 8
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
      {images.map(image => (
        <img className={classes.Storyboard_Image} src={image} key={image} />
      ))}
    </>
  )
}

export default Storyboard
