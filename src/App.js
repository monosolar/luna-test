import React, { createContext, useCallback, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Drop from './Drop'
import VideoItem from './VideoItem'

const useStyles = createUseStyles({
  Present: {
    background: 'linear-gradient(#5C527F, #3E2C41)',
    height: '20rem',
 
  },
  Timeline: {
    backgroundColor: '#6E85B2',
    position: 'relative',
    height: '6rem',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingTop: '1rem',
    paddingBottom: '1rem',
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

  const handleDrop = useCallback(files => {
    const newItems = files.map(file => ({
      id: new Date().getTime(),
      url: URL.createObjectURL(file),
    }))

    setItems([...items, ...newItems])
  }, [])

  return (
    <>
      <div className={classes.App}>
        <div className={classes.Present}>
          Show
          <Drop onDrop={handleDrop} />
        </div>
        <div className={classes.Timeline}>
          <div>
            {items.map(({ id, url }) => (
              <VideoItem url={url} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
