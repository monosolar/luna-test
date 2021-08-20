import { createUseStyles } from 'react-jss'

export default createUseStyles(() => {
  const borderRadius = '.5rem'

  return {
    VideoItem: {
      position: 'absolute',
      top: '1rem',
      bottom: '1rem',
      left: ({ initLeft }) => initLeft,
      background: '#261C2C',

      boxSizing: 'border-box',
      borderRadius,

      padding: '.75rem',

      display: 'flex',
      justifyContent: 'space-between',

      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none',
    },
    VideoItem_Curtain: {
      width: '100%',
      height: '100%',
      position: 'absolute',

      top: 0,
      left: 0,
      borderRadius,
      background: `linear-gradient(90deg, white 0, transparent 10rem, transparent 100%),
                   linear-gradient(270deg, white 0, transparent 10rem, transparent 100%)`,
    },
    VideoItem_Name: {
      position: 'absolute',
      top: '0.5rem',
      left: '1rem',
    },
  }
})
