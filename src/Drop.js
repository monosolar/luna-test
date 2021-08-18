import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDropzone } from 'react-dropzone'
import classnames from 'classnames'

const useStyles = createUseStyles({
  Drop: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    border: '10px dashed',
    borderCollapse: 'separate',
    boxSizing: 'border-box',

    opacity: 0,
  },
  Drop__dragOvered: {
    opacity: 1,
  },
})

const Drop = ({ onDrop }) => {
  const classes = useStyles()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'video/*',
    noClick: true,
  })

  return (
    <div
      className={classnames(classes.Drop, { [classes.Drop__dragOvered]: isDragActive })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Drop the files here ...</p>
    </div>
  )
}

export default Drop
