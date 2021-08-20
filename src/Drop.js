import React, { useCallback, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { useDropzone } from 'react-dropzone'
import classnames from 'classnames'
import { AppContext } from './AppProvider'

const useStyles = createUseStyles({
  Drop: {
    backgroundColor: '#3E2C41',
    width: '100%',
    height: '6rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5rem',

    borderCollapse: 'separate',
    boxSizing: 'border-box',
    color: '#6E85B2',

    fontSize: '1.5rem',
  },
  Drop_Header: {
    width: '100%',
    height: '100%',
    border: '.2rem dashed',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Drop = () => {
  const classes = useStyles()
  const { items, setItems } = useContext(AppContext)

  const handleDrop = useCallback(
    files => {
      const newItems = files.map(file => ({
        id: new Date().getTime(),
        url: URL.createObjectURL(file),
        name: file?.name || 'unknown',
      }))
      console.log('----->', 'files', files)
      setItems([...items, ...newItems])
    },
    [items]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'video/*',
    noClick: true,
  })

  return (
    <div className={classes.Drop} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={classnames(classes.Drop_Header)}>Drop the files here ...</div>
    </div>
  )
}

export default Drop
