import React, { useState } from 'react'
import CComponent from '../components/CComponent'
import FComponent from '../components/FComponent'

/*
in class component, we have component mount/update/unmount (lifecycle) which help in respective operations
but in functional component we don't have these and we use useEffect hook for it
*/
const UseEffectHook = () => {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle Functional Component</button>
      </div>
      {/* {flag ? <CComponent /> : ""} */}
      {flag ? <FComponent /> : ""}
    </div>
  )
}

export default UseEffectHook