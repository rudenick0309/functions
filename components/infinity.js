import React, {useEffect} from "react";
import {useSelector} from "react-redux";

const Infinity = ({data}) => {
  console.log("f c, infinity, data;", data);
  const {name, age, image} = data;

  return (
    <div style={styles.wrapper}>

      <div style={styles.content}>
        <div style={styles.info}>
          <div>
            {name}
          </div>
          <div>
            {age}
          </div>
        </div>

        <div style={styles.image}>
          <img src={image}/>
        </div>
      </div>


    </div>
  );
};

const styles = {
  wrapper:{

    justifyContent:'center',
    alignItems:'center',
    marginBottom:'50px',
  },

  content:{
    position:'relative',
    left:'32%',

  },

  info: {

    display:'flex',
    justifyContent: 'space-around',
    width:'600px',

  },
  image: {

  }
};

export default Infinity;
