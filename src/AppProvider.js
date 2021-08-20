import React, { useEffect, useState } from 'react'

export const AppContext = React.createContext()
/*

value={(() => {
    let duration = 0
    let currentTime = 0
    let isPlaying = false

    const onDurationChange = value => {
      duration = value
    }

    const onPlay = () => {
      isPlaying = true
    }

    const onPause = () => {
      isPlaying = false
    }

    

    return { interval, onDurationChange, onPlay, onPause }
  })()}
  */

const AppProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(currentTime + 100)

        console.log('----->', 'tick', )

        if (currentTime > duration) {
          setCurrentTime(0)
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setDuration
      }}
    >
      {children}{' '}
    </AppContext.Provider>
  )
}

export default AppProvider
