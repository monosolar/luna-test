import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App, { AppProvider } from '@components/App'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
