import { PIXELS_PER_SECOND } from '@common/consts'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export const AppContext = React.createContext()

const TICK_STEP = 0.1

const AppProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [curentUrl, setCurentUrl] = useState('')
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [items, setItems] = useState([])

  const dataRef = useRef({ videoItemsRects: {} })

  const setRect = (id, rect) => {
    const {
      current: { videoItemsRects },
    } = dataRef

    videoItemsRects[id] = rect
    calculateDuration()
  }

  const calculateDuration = () => {
    const {
      current: { videoItemsRects },
    } = dataRef

    const maxRight = Object.values(videoItemsRects).reduce(
      (result = { right: 0 }, item) => {
        return Math.max(result, item.right)
      },
      0
    )
    const maxDuration = maxRight / PIXELS_PER_SECOND
    setDuration(maxDuration)
  }

  const getUrlToPlay = useCallback(() => {
    const {
      current: { videoItemsRects },
    } = dataRef

    const lastPassedId =
      Object.keys(videoItemsRects)
        .filter(id => videoItemsRects[id].left < currentTime * PIXELS_PER_SECOND)
        .pop() || ''

    return items.find(item => item.id === lastPassedId)?.url || ''
  }, [currentTime, items])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(currentTime + TICK_STEP)

        setCurentUrl(getUrlToPlay())

        if (currentTime + 0.5 > duration) {
          setCurrentTime(0)
        }
      }
    }, 1000 * TICK_STEP)
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration, getUrlToPlay])

  return (
    <AppContext.Provider
      value={{
        duration,
        isPlaying,
        setIsPlaying,
        items,
        setItems,
        curentUrl,
        currentTime,
        setRect,
      }}
    >
      {children}{' '}
    </AppContext.Provider>
  )
}

export default AppProvider
