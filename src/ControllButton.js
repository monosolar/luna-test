import React from 'react'
import { createUseStyles } from 'react-jss'
import { ReactComponent as PlayIcon } from './play.svg'
import { ReactComponent as StopIcon } from './stop.svg'

const useStyles = createUseStyles({
  ControllButton: {
    cursor: 'pointer',
    width: '2rem',
    height: '2rem',
    '& path': {
      fill: '#6E85B2',
    },
    margin: '1rem',
  },
})

const ControllButton = ({ onPlay = () => {}, onPause = () => {}, isPlay = true }) => {
  const classes = useStyles()

  const handleClick = () => {
    isPlay ? onPlay() : onPause()
  }

  return (
    <div onClick={handleClick}>
      {isPlay ? (
        <PlayIcon className={classes.PlaybackButton} />
      ) : (
        <StopIcon className={classes.PlaybackButton} />
      )}
    </div>
  )
}

export default ControllButton
