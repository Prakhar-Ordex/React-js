import "./App.css";
// import { useState } from "react";
// import Users from "./Users";
import Form from "./Form/Form";
import Hooks from "./Hooks/Hooks";
import Project from "./Project/Project";
import Topics from "./Topics/Topics";

function App() {
  // let newName = "ave";
  // const handleChange = () => {
  //   console.log("button is clicked");
  //   console.log(newName)
  //   newName = 10;
  //   console.log(newName);
  // };

  // const [data, setData] = useState(0);

  return (
    <>
      {/* <div className="App">   
      {newName}
      <h1>hello world</h1>
      {2 * 2 * 2 * 2 * 2 * 2}

      <button onClick={handleChange}>submit</button>
      </div> */}
      {/* //---------------------------------------------------------------- */}
      {/* <Users num={data} />
      <h1>{data}</h1>
      <button onClick={()=> console.log("first")}>log</button>
      <button
        onClickCapture={() => {
          setData((pre) => (pre === 20 ? 20 : pre + 1));
          console.log(data);
        }}
      >
        add
      </button>
      <button onClickCapture={() => setData((pre) => (pre ? pre - 1 : 0))}>
        subtract
      </button> */}

      {/* components */}
      <Form />

      {/* Prjects */}
      <Project />

      {/* Topics */}
      <Topics />

      {/* hooks */}
      <Hooks/>
    </>
  );
}

export default App;
