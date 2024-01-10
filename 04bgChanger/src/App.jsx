import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-10 px-2 inset-x-0">
          <div className="flex flex-wrap justify-between shadow-2xl bg-white px-3 py-2 rounded-2xl gap-2">
            
            <button onClick={()=> setColor("red")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=> setColor("green")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=> setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> setColor("blue")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=> setColor("skyblue")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "skyblue"}}>Skyblue</button>
            <button onClick={()=> setColor("black")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "black"}}>black</button>
            <button onClick={()=> setColor("pink")} className=" outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "pink"}}>pink</button>
            <button onClick={()=> setColor("white")} className=" outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "white"}}>White</button>

          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
