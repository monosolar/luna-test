import React from 'react'
import logo from './logo.svg'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold', // jss-plugin-camel-case turns this into 'font-weight'
    },
  },
  App: {
    
  },
})

function App() {
  const classes = useStyles()

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  )
}

export default App
