import React, { useCallback, useContext, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import AppContext from './AppContext'
import ControllButton from './ControllButton'
import Drop from './Drop'
import Timeline from './Timeline'

const useStyles = createUseStyles({
  Player: {
    position: 'relative',
    background: 'linear-gradient(#5C527F, #3E2C41)',
    height: '40rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Player_Video: {
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

const Player = () => {
  const classes = useStyles()
  const videoRef = useRef(null)
  //const {} = useContext(AppContext)

  return (
    <div className={classes.Player}>
      <video
        controls={true}
        crossOrigin='anonymous'
        className={classes.Player_Video}
        ref={videoRef}
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        width='620'
      />
      <ControllButton
        onPlay={() => {
          // console.log('----->', videoRef.current, items[0].url)
          // videoRef.current.src = items[0].url
          // videoRef.current.play()
        }}
      />
    </div>
  )
}

export default Player
