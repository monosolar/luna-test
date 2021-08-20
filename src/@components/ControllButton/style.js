import { createUseStyles } from 'react-jss'

export default createUseStyles({
  ControllButton: {
    cursor: 'pointer',
    width: '2rem',
    height: '2rem',
    '& path': {
      fill: '#6E85B2',
    },
    margin: '1rem',
  },

  ControllButton__disabled: {
    opacity: 0.5,
  },
})