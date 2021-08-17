import React, { createContext, useCallback, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Drop from './Drop'
import VideoItem from './VideoItem'

const useStyles = createUseStyles({
  Present: {
    backgroundColor: 'green',
    height: '20rem',
  },
  Timeline: {
    backgroundColor: 'blue',
    position: 'relative',
    height: '5rem',
  },
  App: {
    maxWidth: '50rem',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  Video: {
    //display: 'none',
  },
})

let d = 0

const App = () => {
  const classes = useStyles()
  const [items, setItems] = useState([])

  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const imgRef = useRef(null)

  const handleDrop = useCallback(files => {
    //setItems(acceptedFiles)

    const file = files[0]
    const fileURL = URL.createObjectURL(file)

    videoRef.current.src = fileURL
  }, [])

  const onTimeUpdate = e => {
    const canvas = canvasRef.current
    const video = videoRef.current

    canvas.getContext('2d').drawImage(video, (video.videoWidth + 10) * d, 0)

    console.log('----->', 'onTimeUpdate', video.currentTime, video.duration)

    d++

    if (d < video.duration) {
      video.currentTime = d
    }
    // var image2 = new Image()
    // image2.src = canvas.toDataURL()

    //imgRef.current.appendChild(image2)
  }

  const onLoadedData = e => {
    const video = e.target
    const canvas = canvasRef.current

    canvas.width = 1200
    canvas.height = video.height
    const ttt = video.height / video.videoHeight

    var ctx = canvas.getContext('2d')
    ctx.scale(ttt, ttt)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    console.log('----->', 'onLoadedData', video.height, video.videoHeight)

    video.currentTime = 0 //e.target.duration / 2
  }

  return (
    <>
      <button>Davau</button>
      <div className={classes.App}>
        <div className={classes.Present}>
          Show
          <Drop onDrop={handleDrop} />
        </div>
        <div className={classes.Timeline}>
          {items.map(item => (
            //<VideoItem key={Math.random()} />
            <img src={item} key={item} />
          ))}

          <video
            className={classes.Video}
            ref={videoRef}
            onLoadedData={onLoadedData}
            onSeeked={onTimeUpdate}
            crossOrigin='anonymous'
            controls
            src='https://www.w3schools.com/tags/movie.mp4'
            height='100%'
          />
          <canvas ref={canvasRef} />
          {/* <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem /> */}
        </div>

        <div ref={imgRef} />
      </div>
    </>
  )
}

export default App
