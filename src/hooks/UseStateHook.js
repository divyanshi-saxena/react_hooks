import React, { useState } from 'react'

function initialValue() {
  console.log("function called")
  return 0;
}
const UseStateHook = () => {
  // in useState when value changes, the component gets re-rendered automatically
  // we can use initial values - number, string, boolean, array, object
  // you cannot use the useState conditionally
  // if(true) useState()

  // console.log(useState()) // [undefined, f()]
  // console.log(useState(2)) // [2, f()]

  const [name, setName] = useState("phineas")
  // we can use functions as initial value to useState 
  /*
  The initialState argument is the state used during the initial render. In subsequent renders, 
  it is disregarded. If the initial state is the result of an expensive computation, you may 
  provide a function instead, which will be executed only on the initial render
  */

  const [steps, setSteps] = useState(() => {
    console.log("clicked")
    return 0
  })

  // if we call function like this then it would be called multiple times.
  // so best way is to "define" the function here itself
  // const [steps, setSteps] = useState(initialValue())
  // const [steps, setSteps] = useState(0)
  const [names, setNames] = useState([])
  function changeName() {
    // console.log("clicked")
    return setName("ferb")
  }
  function increment() {
    // setSteps(steps + 1)
    // setSteps(steps + 1)
    // above won't work together because steps is same so only 1 increment will happen
    // to make it work correctly, do below using previous state
    setSteps((prevState) => prevState + 1)
    setSteps((prevState) => prevState + 1)
  }
  function decrement() {
    setSteps(prevState => prevState - 1)
  }
  function addNames(e) {
    e.preventDefault()
    // bad practice
    // setNames(names.push({id: names.length, name}))
    setNames([...names, { id: names.length, name }])
    console.log(names)
    setName("")
  }
  return (
    <div>
      <h2>hi {name}</h2>
      <button onClick={changeName}>Click me</button>
      <hr />
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr />
      <form onSubmit={addNames}>
        <input type="text" value={name} placeholder="add names" onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {names.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default UseStateHook