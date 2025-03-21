import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let arr = [1,2,3];
  let someObject = {
    name: 'avinash',
    age: 30
  }

  return (
    <>
      <h1 className="bg-green-400 mb-5">Tailwind test</h1>
      <Card username='propsexample1' btntext="CLICK 1" />
      <Card username='propsexample2' btntext="CLICK 2" />

    </>
  );
}

export default App;
