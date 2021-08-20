import React, { useContext, useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { AppContext } from './AppProvider'
import ControllButton from './ControllButton'

const useStyles = createUseStyles({
  Player: {
    position: 'relative',
    background: 'linear-gradient(#5C527F, #3E2C41)',
    minHeight: '40rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Player_Video: {
    width: '100%',
  },
})

const Player = () => {
  const classes = useStyles()
  const videoRef = useRef(null)
  const { setIsPlaying, isPlaying, duration, curentUrl } = useContext(AppContext)

  return (
    <div className={classes.Player}>
      <video
        crossOrigin='anonymous'
        className={classes.Player_Video}
        ref={videoRef}
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        src={curentUrl}
        autoPlay={true}
        controls={true}
      />
      <ControllButton
        disabled={duration === 0}
        isPlaying={isPlaying}
        onClick={() => {
          if (isPlaying) {
            videoRef.current.pause()
          } else {
            videoRef.current.play()
          }
          setIsPlaying(!isPlaying)
        }}
      />
    </div>
  )
}

export default Player
