import React, {useState, useReducer} from 'react'

// const initialState = 0
const initialState = [{
  id: Date.now(),
  name: "Divyanshi",
  email: "divyanshi@email.com"
}]
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(contact => {
        return contact.id !== action.payload.id
      });
    default:
      throw new Error();
  }
  // switch (action.type) {
  //   case "increment":
  //     return state + 1;
  //   case "decrement":
  //     return state - 1;
  //   default:
  //     throw new Error();
  // }
}
function UseReducerHook() {
  /**
   * To manage state, we can also use useReducer (apart from useState)
   * It is used to manage complex states
   * it takes 2 params, first is reducer function which takes state and action; and based on action
   * is going to change the state and second param is initial value of state
   * useReducer returns 2 things, state and dispatch function to dispatch action
   * So whenever we need to click inc/dec button, it needs to dispatch an action and so on
   * 
   * now this isn't exactly the case to use useReducer, we take complex example now
   * change the initialState to array of objects
   */
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  console.log(state)
  // const increment = () => {
  //   setCounter(counter + 1)
  // }
  // const decrement = () => {
  //   setCounter(counter - 1)
  // }
  const addContact = (e) => {
    e.preventDefault()
    const contact = {
      id: Date.now(),
      name,
      email
    }
    setName("")
    setEmail("")
    dispatch({type: "add", payload: contact})
  }
  return (
    <div>
      <h1>useReducer Hook</h1>
      {/* <h2>{counter}</h2> */}
      {/* <h2>{state}</h2> */}
      <form onSubmit={addContact}>
        <input type="text" placeholder="name" value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="text" placeholder="email" value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button>Add Contact</button>
      </form>
      <div>
        <ul>
          {state.map(contact => {
            return (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <div><button onClick={() => dispatch({ type: "delete", payload: { id: contact.id } })}>
                delete</button></div>
              </li>
            )
          })}
        </ul>
      </div>
      {/* <button onClick={increment}>Increment</button> */}
      {/* <button onClick={() => dispatch({type: "increment"})}>Increment</button> */}
      {/* <button onClick={decrement}>Decrement</button> */}
      {/* <button onClick={() => dispatch({type: "decrement"})}>Decrement</button> */}
    </div>
  )
}

export default UseReducerHook