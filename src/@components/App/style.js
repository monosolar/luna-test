import { createUseStyles } from 'react-jss'

export default createUseStyles({
  App: {
    maxWidth: '70rem',
    width: '100%',
    margin: '2rem auto auto auto',
    position: 'relative',
  },
  App_dd: {
    '&:after': {
      content: '"Drop the files here ..."',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: '#3E2C41',
      textAlign: 'center',
      verticalAlign: 'midle',
      fontSize: '2rem',
      color: '#6E85B2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2rem',
      border: '.5rem dashed',
      opacity: 0.5,
    },
  },
})
