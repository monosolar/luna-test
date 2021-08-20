import { createUseStyles } from 'react-jss'

export default createUseStyles(() => {
  return {
    Timeline: {
      backgroundColor: '#5C527F',
      position: 'relative',
      overflowX: 'scroll',
      overflowY: 'hidden',
    },
    Timeline_Content: {
      position: 'relative',
      height: '10rem',
    },

    Slider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
    },
    Slider_Triangle: {
      width: '0',
      height: '0',
      borderLeft: '.5rem solid transparent',
      borderRight: '.5rem solid transparent',
      borderTop: '.75rem solid #F05454',
    },

    Slider_Vertical: {
      position: 'absolute',
      top: 0,
      left: 'calc(50% - .12rem)',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderLeft: '.2rem solid #F05454',
      height: '100%',
    },
  }
})