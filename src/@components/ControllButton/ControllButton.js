import classnames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { ReactComponent as PlayIcon } from '@assets/icons/play.svg'
import { ReactComponent as StopIcon } from '@assets/icons/play.svg'

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

  ControllButton__disabled: {
    opacity: 0.5,
  },
})

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
