import React, { createContext, useCallback, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Drop from './Drop'
import VideoItem from './VideoItem'
import { ReactComponent as PlayIcon } from './play.svg'

const useStyles = createUseStyles({
  Present: {
    background: 'linear-gradient(#5C527F, #3E2C41)',
    height: '40rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Present_Video: {
    height: '100%',
  },

  PlaybackButton: {
    width: '8rem',
    height: '8rem',
    '& path': {
      fill: '#6E85B2',
    },
    margin: '1rem',
  },

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
  App: {
    maxWidth: '70rem',
    width: '100%',
    margin: '2rem auto auto auto',
    position: 'relative',
  },
})

const App = () => {
  const classes = useStyles()
  const [items, setItems] = useState([])
  const videoRef = useRef(null)

  const handleDrop = useCallback(
    files => {
      const newItems = files.map(file => ({
        id: new Date().getTime(),
        url: URL.createObjectURL(file),
        name: file?.name || 'unknown',
      }))

      setItems([...items, ...newItems])
    },
    [items]
  )

  return (
    <>
      <div
        onClick={() => {
          console.log('----->', videoRef.current, items[0].url)
          videoRef.current.src = items[0].url
          videoRef.current.play()
        }}
      >
        <PlayIcon className={classes.PlaybackButton} />
      </div>
      <div
        onClick={() => {
          console.log('----->', videoRef.current, items[0].url)
          videoRef.current.src = items[1].url
          videoRef.current.play()
        }}
      >
        <PlayIcon className={classes.PlaybackButton} />
      </div>
      <div className={classes.App}>
        <div className={classes.Present}>
          <Drop onDrop={handleDrop} />
          <video
            controls={true}
            crossOrigin='anonymous'
            className={classes.Present_Video}
            ref={videoRef}
            poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
            width='620'
          >
            Sorry, your browser support embedded videos, but dworry, you can{' '}
            <a href='https://archive.org/details/BigBuckBunny_124'>download it</a>
            and watch it with your favorite video player!
          </video>
        </div>
        <div className={classes.Timeline}>
          <div className={classes.Timeline_Scale}>
            {Array(10)
              .fill()
              .map((item, idx) => (
                <time key={idx}>00:00</time>
              ))}
          </div>
          <div className={classes.Timeline_Content}>
            {items.map(({ id, url, name }) => (
              <VideoItem name={name} url={url} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
