import React, { useState } from 'react'
import CComponent from '../components/context/CComponent'
import { CounterContext } from '../components/context/CounterContext'
import FComponent from '../components/context/FComponent'

function UseContextHook() {
  /**
   * we want to display value of the counter in function and class components
   */
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div style={{ border: "1px solid #000"}}>
      <h1>App Component</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <CounterContext.Provider value={{counter, setCounter}}>
      <FComponent />
      <hr />
      {/* <CComponent /> */}
      </CounterContext.Provider>
    </div>
  )
}

export default UseContextHook