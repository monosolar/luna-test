import classNames from 'classnames'
import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import Player from '@components/Player'
import Timeline from '@components/Timeline'
import { AppContext } from './AppProvider'
import useStyles from './style'

const App = () => {
  const classes = useStyles()
  const { items, setItems } = useContext(AppContext)

  const handleDrop = useCallback(
    files => {
      const newItems = files.map(file => ({
        id: `${new Date().getTime()}`,
        url: URL.createObjectURL(file),
        name: file?.name || 'unknown',
      }))
      setItems([...items, ...newItems])
    },
    [setItems, items]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'video/*',
    noClick: true,
  })

  return (
    <div
      className={classNames(classes.App, { [classes.App_dd]: isDragActive })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Player />
      <Timeline />
    </div>
  )
}

export default App
