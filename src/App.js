import React from 'react'
import { createUseStyles } from 'react-jss'
import VideoItem from './VideoItem'

const useStyles = createUseStyles({
  Present: {
    backgroundColor: 'green',
  },
  Timeline: {
    backgroundColor: 'blue',
    position: 'relative',
  },
  App: {
    maxWidth: '50rem',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.App}>
      <div className={classes.Present}>sdfsd</div>
      <div className={classes.Timeline}>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    </div>
  )
}

export default App
