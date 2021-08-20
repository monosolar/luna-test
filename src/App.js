import React, { useCallback, useState } from 'react'
import { createUseStyles } from 'react-jss'
import AppProvider from './AppProvider'
import Drop from './Drop'
import Player from './Player'
import Timeline from './Timeline'

const useStyles = createUseStyles({
  App: {
    maxWidth: '70rem',
    width: '100%',
    margin: '2rem auto auto auto',
    position: 'relative',
  },
})

const App = () => {
  const classes = useStyles()


  return (
    <AppProvider>
      <div className={classes.App}>
        <Player />
        <Timeline />
        <Drop />
      </div>
    </AppProvider>
  )
}

export default App
