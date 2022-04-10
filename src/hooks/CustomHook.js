import React from 'react'
import useCounter from '../custom hooks/useCounter'
import ScreenComponent from '../components/ScreenComponent'

function CustomHook() {
  // const [counter, increment, decrement, reset] = useCounter(0)
  const [counter, increment, decrement, reset] = useCounter(0, 5)
  return (<>
    <div>
      <h1>Custom Hook Example</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
    <ScreenComponent />
    {/* we have to calculate screen width and tell if we are in small, medium, large device */}
  </>)
}

export default CustomHook