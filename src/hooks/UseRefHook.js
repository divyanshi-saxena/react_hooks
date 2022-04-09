import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
/**
 * 1. DOM Reference (accesing dom element) - in this example, we are reseting the input
 * and shifting the focus back in input box with help of useRef
 * 2. useRef for storing the previous state
 * 3. hold mutable value prevent re-render of component
 */
  const [name, setName] = useState("")
  const [counter, setCounter] = useState(0) // to demonstrate storing previous state as re-render occurs
  const prevCounterRef = useRef("")
  const inputEl = useRef("") // it returns object with a property called "current"
  console.log(inputEl)
  const resetInput = () => {
    setName("")
    inputEl.current.focus()
  }

  useEffect(() => {
    prevCounterRef.current = counter
  }, [counter])
  return (
    <>
      <div>
        <input type="text" name="name" autoComplete="off" value={name}
          ref={inputEl}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <div>My name is {name}</div>
      <div>
        <h1>Random counter: {counter}</h1>
        {typeof prevCounterRef.current !== "undefined" && (
        <h2>Previous counter: {prevCounterRef.current}</h2>
        )}
        <button onClick={e => setCounter(Math.ceil(Math.random() * 100))}>
          Generate number
        </button>
      </div>
    </>
  )
}

export default UseRefHook