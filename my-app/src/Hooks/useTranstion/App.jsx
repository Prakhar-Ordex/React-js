import React, { useEffect, useState, useTransition } from "react";

const App = () => {
//   const [isPending, startTranstion] = useTransition();
//   const [show, setShow] = useState(true);
//   useEffect(() => {
//     console.log("run");
//   },[show]);

//   const handleClick = () => {
//     startTranstion(() => {
//       setShow(show + 1);
//       console.log("handleClick Run !");
//     });
    //   };
    
    // Example 2
    const [isPending, startTranstion] = useTransition();
    const [input, setInput] = useState("");
    const [dataList, setDataList] = useState([]);
    const DataSize = 10000;

    const handleChange = (e) => {
        setInput(e.target.value);
        startTranstion(() => {
            const a = [];
            for (let i = 0; i < DataSize; i++) {
                a.push(e.target.value);
            }
            setDataList(a)
        })
    }
  return (
    <div>
      {/* <h4>useTranstion Hook </h4>
      <p>Show : {show}</p>
      <button onClick={handleClick}>Update </button> */}
          
          {/* example 2 */}

          <input type="text" value={input} onChange={handleChange} />
          {isPending ? "Loading...." :
              dataList.map((item, i) => {
                      return (
                          <div key={i}>
                              {item}
                          </div>
                      )
                  })
          }
    </div>
  );
};

export default App;
