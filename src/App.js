import React, { useCallback, useState } from 'react'
import { createUseStyles } from 'react-jss'
import AppProvider from './AppProvider'
import Drop from './Drop'
import Player from './Player'
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
      <AppProvider>
        <div className={classes.App}>
          <Player />
          <Timeline items={items} />
          <Drop onDrop={handleDrop} />
        </div>
      </AppProvider>
    </>
  )
}

export default App
