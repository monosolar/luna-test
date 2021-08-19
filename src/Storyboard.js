import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Storyboard_Video: {
    display: 'none',
    height: '100%',
  },
  Storyboard_Canvas: {
    display: 'none',
    height: '100%',
  },
  Storyboard_Image: {
    height: '100%',
  },
})

const Storyboard = ({ url }) => {
  const classes = useStyles()
  const canvasRef = useRef(null)
  const videoRef = useRef(null)

  const [images, setImages] = useState([])

  const handleSeeked = () => {
    const canvas = canvasRef.current
    const video = videoRef.current

    const ctx = canvas.getContext('2d')
    // ctx.scale(scaleValue, scaleValue)
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
    ctx.scale(0.2, 0.2)

    const img = new Image()
    img.src = canvas.toDataURL('image/png')
    setImages([...images, canvas.toDataURL('image/png')])

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

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    console.log('----->', 'onLoadedData', canvas.width)

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

      {/* <img
        className={classes.Storyboard_Image}
        src={
          'https://media.smallbiztrends.com/2021/07/JYGjERiM-streamline-invoicing-400x224.jpg'
        }
      />
      <img
        className={classes.Storyboard_Image}
        src={
          'https://media.smallbiztrends.com/2021/07/JYGjERiM-streamline-invoicing-400x224.jpg'
        }
      />
      <img
        className={classes.Storyboard_Image}
        src={
          'https://media.smallbiztrends.com/2021/07/JYGjERiM-streamline-invoicing-400x224.jpg'
        }
      />
      <img
        className={classes.Storyboard_Image}
        src={
          'https://media.smallbiztrends.com/2021/07/JYGjERiM-streamline-invoicing-400x224.jpg'
        }
      />
      <img
        className={classes.Storyboard_Image}
        src={
          'https://media.smallbiztrends.com/2021/07/JYGjERiM-streamline-invoicing-400x224.jpg'
        }
      />
      <img
        className={classes.Storyboard_Image}
        src={
          'https://media.smallbiztrends.com/2021/07/JYGjERiM-streamline-invoicing-400x224.jpg'
        }
      /> */}
    </>
  )
}

export default Storyboard
