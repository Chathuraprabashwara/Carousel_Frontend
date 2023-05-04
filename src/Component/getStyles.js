const style = (opercity) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '400px',
      backgroundColor: '#eee'
    },
    slide: {
      position: 'relative',
      width: '100%',
      height: '100%',
      opacity: opercity,
      transition: 'opacity 0.5s ease-in-out',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    title: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: 0,
      color:"white",
      textShadow: '2px 2px 2px #000',
      opacity: opercity,
      transition: 'opacity 0.5s ease-in-out',          
    },
    subTitle: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '1rem',
      margin: 0,
      color:"white",
      textShadow: '2px 2px 2px #000',
      opacity: opercity,
      transition: 'opacity 0.5s ease-in-out', 
    },

    iconLeft:{
        position:"absolute",
        top:"40%",
        color:'white',
        cursor:"pointer",
        margin:'10px'
    },
    iconRight:{
        position:"absolute",
        top:"40%",
        left:"96%",
        color:'white',
        cursor:"pointer",
        margin:'10px'
    }
  })

  export default style