import React from 'react';

const Normal = ({data}) => {
  const { name, image  } = data;

  return (
    <div style={styles.wrapper}>
      <div>
        {name}
      </div>
      <div>
        <img src={image}/>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'40px',
  }
}


export default Normal;
