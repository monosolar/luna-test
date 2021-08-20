import React, { useContext, useRef } from 'react'
import { AppContext } from '@components/App/AppProvider'
import ControllButton from '@components/ControllButton'
import useStyles from './style'

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
