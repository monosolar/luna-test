import React, { useEffect, useState } from 'react'

export const AppContext = React.createContext()

const TICK_STEP = 0.1

const AppProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [curentUrl, setCurentUrl] = useState('')
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(currentTime + TICK_STEP)

        console.log('----->', 'tick', currentTime, duration)

        if (currentTime > duration) {
          setCurrentTime(0)
        }
      }
    }, 1000 * TICK_STEP)
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration])

  return (
    <AppContext.Provider
      value={{
        duration,
        setDuration,
        isPlaying,
        setIsPlaying,
        items,
        setItems,
        curentUrl,
        currentTime,
      }}
    >
      {children}{' '}
    </AppContext.Provider>
  )
}

export default AppProvider
