import React, { useState, useMemo } from 'react'

function factorial(n) {
  // making this function expensive
  let i = 0
  while (i < 200000) i++
  // this heavy operation also affects the input box re-renders 
  // because as the input box state changes, it renders whole page and factorial function is called
  // even though the counter value has not changed
  // so we use useMemo hook
  if (n < 0) {
    return -1
  }
  if (n === 0) {
    return 1
  }
  return n * factorial(n-1) 
}


// const DisplayName = ({name}) => {
//   console.log("rendered")
//   return <p>{`My name is ${name}`}</p>
// }

// when the counter changes, the whole component get re-rendered
// so "rendered" is printed even when we click the button
// so DisplayName component actually gets the props (which is an object)
// as objects are compared based on references, so everytime this component is called, 
// new instane of object is created, so in this case also we can use useMemo

// const DisplayName = useMemo(({name}) => {
//   console.log("rendered")
//   return <p>{`My name is ${name}`}</p>
// })

// this throws error saying useMemo cannot be called at top level
// must be called in a react function component so we can use React.memo

const DisplayName = React.memo(({name}) => {
  console.log("rendered")
  return <p>{`My name is ${name}`}</p>
})

// this time we are making check on the props and referential equality of props is true
// that's why the props are not changed and we do not see "rendered" when we change the factorial

function UseMemoHook() {
  /**
   * 1. Optimize expensive operation
   * 2. Referential equality - in js we have primitive data type and non-primitive
   * so when we make equality on PDT, they are always checked based on their values
   * but on NPDT like arrays/objects, they are always checked based on their references
   * example: a=5; b=5; a==b gives true
   * a=[1,2]; b=[1,2]; a==b gives false
   * a={name:"mini"}; b={name:"mini"}; a==b gives false
   * 
   * WE SHOULD NEVER USE USEMEMO DIRECTLY. FIRST WRITE THE CODE NORMALLY THEN OPTIMIZE IT
   * IF WE USE IT FOR ALL FUNCTIONS, IT WOULD GIVE US "PERFORMANCE OVERHEAD" WHICH IS NOT GOOD FOR APPS
   */
  const [counter, setCounter] = useState(1)
  const [name, setName] = useState("")
  // const result = factorial(counter)
  const result = useMemo(() => {
    return factorial(counter)
  }, [counter])
  // so when input changes, it doesn't call the factorial function and use the memoized value

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
          <DisplayName name={name}></DisplayName>
          <p>{`My name is ${name}`}</p>
        </div>
      </div>
    </>
  )
}

export default UseMemoHook