import "./App.css";
import Card from "./components/Card";

function App() {
  // let newObj={
  //   name:"owl new",
  //   age:21
  // }
  return (
    <>
      <h1 className="bg-blue-400 rounded-xl font-extrabold text-3xl p-3">
        Hell Dharmendra Ram
      </h1>
     {/* <Card title="Owl" someObj={newObj}/> */}
     <Card title="Owl" age="30"/>
     <Card title="Animal Owl" age="40"/>

    </>
  );
}

export default App;
