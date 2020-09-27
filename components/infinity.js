import React, {useEffect} from "react";
import {useSelector} from "react-redux";

const Infinity = ({data}) => {
  // console.log("f c, infinity, data;", data);
  const {name, id, image} = data;

  return (
    // <div style={styles.wrapper}>
    //
    //   <div style={styles.content}>
    //     <div style={styles.info}>
    //       <div>
    //         {name}
    //       </div>
    //       <div>
    //         {/*{id}*/}
    //       </div>
    //     </div>
    //
    //     <div style={styles.image}>
    //       <img src={image}/>
    //     </div>
    //   </div>
    //
    //
    // </div>
    <div style={styles.wrapper}>
      <div>
        {name}
      </div>
      <div>
        <img src={image}/>
      </div>
    </div>
  );
};

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
//
//
// const styles = {
//   wrapper:{
//     justifyContent:'center',
//     alignItems:'center',
//     marginBottom:'50px',
//   },
//
//   content:{
//     position:'relative',
//     left:'32%',
//
//   },
//
//   info: {
//
//     display:'flex',
//     justifyContent: 'space-around',
//     width:'600px',
//
//   },
//   image: {
//
//   }
// };

export default Infinity;
