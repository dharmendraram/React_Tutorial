import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  // let counter =15;
  const addValue = () => {
    // counter=counter+1;
    if(counter < 20)
    {
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);   //batch return only one time
       setCounter(prevCounter => prevCounter + 1);
       setCounter(prevCounter => prevCounter + 1);
       setCounter(prevCounter => prevCounter + 1);

    }
   
    // console.log("clicked", counter);
  };

  
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  
  };

  return (
    <>
      <h1>Hello Dharmendra Kumar Ram</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add +</button>
      <button onClick={removeValue}>Sub -</button>
    </>
  );
}

export default App;
