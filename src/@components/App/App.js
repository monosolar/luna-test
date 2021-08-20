import React, { useCallback, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Drop from '../../Drop'
import Player from '../../Player'
import Timeline from '../../Timeline'
import AppProvider from './AppProvider'

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
