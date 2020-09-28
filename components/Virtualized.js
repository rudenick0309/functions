import React, {useEffect, useRef, useState} from "react";
import {List, AutoSizer, CellMeasurer, CellMeasurerCache} from "react-virtualized";
import faker from "faker";

// export default function Virtualized() {
const Virtualized = () => {
  const [people, setPeople] = useState([]);

  const [time, setTime] = useState(new Date());
  const cache = useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 500,
  }));


  useEffect(() => {
    setPeople(
      [...Array(10000).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          images: faker.image.image()
        };
      })
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/**/}


      <div style={styles.wrapper}>
        <AutoSizer>
          {({ width, height }) => (

            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={people.length}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];

                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <h2>{person.name}</h2>
                      <img src={person.images} style={{width:'80%', height:'400px'}}  alt=""/>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>


    {/*  */}
    </div>

  );
}

const styles = {
  wrapper: {
    width: "50%",
    height: "100vh",
    position:'relative',
    left:'30%',
  },
  font:{
    color:'white',
  },

};

export default Virtualized;


//
// <div>
//   <AutoSizer>
//     {({width, height}) => (
//       <List
//         width={width}
//         height={height}
//         rowHeight={cache.current.rowHeight}
//         deferredMeasurementCache={cache.current}
//         rowCount={people.length}
//         rowRenderer={({key, index, style, parent}) => {
//           const person = people[index];
//
//           return (
//             <CellMeasurer
//               key={key}
//               cache={cache.current}
//               parent={parent}
//               columnIndex={0}
//               rowIndex={index}
//             >
//               <div style={style}>
//                 <h2>{person.name}</h2>
//                 <img src={person.images} />
//               </div>
//             </CellMeasurer>
//           );
//         }}
//       />
//     )}
//   </AutoSizer>
// </div>
