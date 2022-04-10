import React, { useState, useMemo, useEffect, useCallback } from 'react'

function factorial(n) {
  // making this function expensive
  let i = 0
  while (i < 200000000) i++
  if (n < 0) {
    return -1
  }
  if (n === 0) {
    return 1
  }
  return n * factorial(n-1) 
}

const DisplayName = ({displayName}) => {
  const [value, setValue] = useState("")
  useEffect(() => {
    // setValue(displayName)
    setValue(displayName("Hello")) // when i pass argument
    console.log("component rendered")
  },[displayName])
  return <p>{`My name is ${value}`}</p>
}

function UseCallbackHook() {
  /**
   * 1. Memoize the function (useCallback) vs Memoize the value (useMemo)
   * 2. Referential equality for functions
   * 
   * In this example, instead of sending "name" from useState, we are return "name" variable from a function
   * "displayName" which is being sent as a prop to "DisplayName" Component. When we type in input box, useEffect
   * inside the DisplayName comp is triggered printing "component rendered" BUT if we just play with counter then also
   * "component rendered" is printed because when the counter variable changes, it re-renders the whole component,
   * which triggers a new instance of displayName function and useEffect is triggered.
   * 
   * So this problem can be solved by useCallback hook then we wrap the displayName in it
   */
  const [counter, setCounter] = useState(1)
  const [name, setName] = useState("")

  const result = useMemo(() => {
    return factorial(counter)
  }, [counter])

  // const displayName = () => {
  //   return name
  // }

  // const displayName = useCallback(() => {
  //   return name
  // }, [name])

  // i can also pass argument
  const displayName = useCallback((greeting) => {
    return greeting + " " + name
  }, [name])

  return (
    <>
      <div>
        <h1>
          Factorial of {counter} is: <span>{result}</span>
        </h1>
        <div>
          <button onClick={() => setCounter(counter-1)}>Decrement</button>
          <button onClick={() => setCounter(counter+1)}>Increment</button>
        </div>
        <hr />
        <div>
          <div>
            <label>Enter name</label>
          </div>
          <input type="text" value={name} placeholder="enter name" onChange={e => setName(e.target.value)} />
          <hr />
          <DisplayName displayName={displayName}></DisplayName>
          <p>{`My name is ${name}`}</p>
        </div>
      </div>
    </>
  )
}

export default UseCallbackHook