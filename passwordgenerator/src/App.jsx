import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumber] = useState(false);
  const [isCharacterAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "";
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumberAllowed) {
      str += "0123456789";
    }
    if (isCharacterAllowed) {
      str += "^[!@#$%^&*()_+\-=\[\]{};':";
    }
    for (let i = 1; i <= array.length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [length, 
    isNumberAllowed, isCharacterAllowed, setPassword]);



  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-8 text-black-500 bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
      </div>
      </div>
    </>
  )
}

export default App
