import classnames from 'classnames'
import React from 'react'
import { ReactComponent as PlayIcon } from '@assets/icons/play.svg'
import { ReactComponent as StopIcon } from '@assets/icons/stop.svg'
import useStyles from './style'

const ControllButton = ({ onClick = () => {}, isPlaying = true, disabled = false }) => {
  const classes = useStyles()

  return (
    <div
      className={classnames(classes.ControllButton, {
        [classes.ControllButton__disabled]: disabled,
      })}
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}
    >
      {isPlaying ? <StopIcon /> : <PlayIcon />}
    </div>
  )
}

export default ControllButton
