import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [len, setLen] = useState(6)
  const [num_allowed, setNum_allowed] = useState(false)
  const [char_allowed, setChar_allowed] = useState(false)
  const [Pass_allowed, setPass_allowed] = useState("")

  const passwordGenarator = useCallback(() => {
    let word = ""
    let t_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num_allowed) t_char += "1234567890"
    if (char_allowed) t_char += "!@#$%&*(){}:<>?,./;'[]</>"

    for (let i = 1; i <= len; i++) {
      let index = Math.floor(Math.random() * t_char.length + 1);

      word += t_char.charAt(index);
      console.log(word);
    }

    setPass_allowed(word);





    // let pass= ""
    // let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // if(num_allowed) char+="0123456789";
    // if(char_allowed) char+="!@#$%^&*()";

    // for(let i=0;i<len;i++){
    //   let index =Math.floor(Math.random() * arr.length+1);
    //   pass= char.charAt(index)
    // } 

    // setPass_allowed(pass)
  }
    , [len, num_allowed, char_allowed, Pass_allowed]);

  let Pass_Ref = useRef(null)
  const copyClipBoard = useCallback(() => {
    Pass_Ref.current?.select()
    Pass_Ref.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(Pass_allowed)



  }, [Pass_allowed])

  useEffect(() => {
    passwordGenarator()
  }, [len, num_allowed, char_allowed])

  return (
    <>
      <h1 className='text-white text-center text-4xl py-14'>Password Genarator</h1>

      <div className='text-white text-center rounded-md bg-gray-800 w-full max-w-md mx-auto px-2 pb-3 '>
        <h1 className='py-2'>Input</h1>
        <div className='text-white flex flex-box justify-center w-full max-w-md  mx-auto shadow-md rounded-lg overflow-hidden '>

          <input

            type="text"
            className="outline-none w-full py-1 px-3 text-black"
            placeholder='Password'
            readOnly
            value={Pass_allowed}
            ref={Pass_Ref}
          />
          <button
            onClick={copyClipBoard}
            className="bg-green-500 hover:bg-green-700 active:bg-green-300 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out cursor-pointer"
        >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div
            className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={len}
              className='curser-pointer'
              onChange={(e) => {
                setLen(e.target.value)
              }} />
            <label >Length: {len}</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input
              className='mt-1'
              type="checkbox"
              id='numberInput'
              defaultChecked={num_allowed}
              onChange={() => {
                setNum_allowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>

            <input
              className='mt-1'
              type="checkbox"
              id='charInput'
              defaultChecked={char_allowed}
              onChange={() => {
                setChar_allowed((prev) => !prev)

              }}
            />
            <label htmlFor='charInput'>Special Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App