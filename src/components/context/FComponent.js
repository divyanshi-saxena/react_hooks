import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function FComponent() {
  // const value = useContext(CounterContext)
  const { counter, setCounter } = useContext(CounterContext)
  // by passing setCounter, we can increment/decrement the value of counter
  // from the child components themselves so we can update the state from any component
  return (
    <div style={{border: "1px solid #000"}}>
      <h1>Function component</h1>
      <h2>{counter}</h2>
      {/* <h2>{value}</h2> */}
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <hr />
      <FChild />
    </div>
  )
}

const FChild = () => {
  // const value = useContext(CounterContext)
  const {counter, setCounter} = useContext(CounterContext)

  return (
    <div style={{border: "1px solid #000"}}>
      <h1>Function Child Component</h1>
      {/* <h2>{value}</h2> */}
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  )
}
export default FComponent