import React, {
  createContext,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { createUseStyles } from 'react-jss'
import Drop from './Drop'
import VideoItem from './VideoItem'
import { ReactComponent as PlayIcon } from './play.svg'
import Timeline from './Timeline'

const useStyles = createUseStyles({
  Present: {
    position: 'relative',
    background: 'linear-gradient(#5C527F, #3E2C41)',
    height: '40rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Present_Video: {
    width: '100%',
  },

  PlaybackButton: {
    cursor: 'pointer',
    width: '2rem',
    height: '2rem',
    '& path': {
      fill: '#6E85B2',
    },
    margin: '1rem',
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
      console.log('----->', 'files', files)
      setItems([...items, ...newItems])
    },
    [items]
  )

  return (
    <>
      <div
        onClick={() => {
          const images = document.querySelectorAll('[class^=VideoItem-')
          console.log('----->', 'dd', images)
          let prevRatio

          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.intersectionRatio > prevRatio) {
                console.log('----->', 'da')
              } else {
                console.log('----->', 'net')
              }

              prevRatio = entry.intersectionRatio
            })
          })

          images.forEach(image => {
            observer.observe(image)
          })
        }}
      >
        <PlayIcon className={classes.PlaybackButton} />
      </div>
      <div className={classes.App}>
        <div className={classes.Present}>
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
          </video>{' '}
          <div
            onClick={() => {
              console.log('----->', videoRef.current, items[0].url)
              videoRef.current.src = items[0].url
              videoRef.current.play()
            }}
          >
            <PlayIcon className={classes.PlaybackButton} />
          </div>
        </div>
        <Timeline items={items} />
        <Drop onDrop={handleDrop} />
      </div>
    </>
  )
}

export default App
