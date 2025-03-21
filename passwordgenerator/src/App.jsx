import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  let [isNumberAllowed, setNumber] = useState(false);
  let [isCharacterAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";

    if (isCharacterAllowed) str += "!@#$%^&*-_+=[]{}~`";

     
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log('pass', pass)


    setPassword(pass)


  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumberAllowed, isCharacterAllowed, passwordGenerator]);
console.log(password)
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
          ></input>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              value={length}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            ></input>
            <label htmlFor="numberInput" className="text-white">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharacterAllowed}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            ></input>
            <label htmlFor="characterInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
