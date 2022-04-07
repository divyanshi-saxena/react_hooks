import React, { useState, useEffect } from 'react'

function FComponent() {
  const [time, setTime] = useState(new Date().toString())
  const [message, setMessage] = useState("Functional Component")
  const showDate = () => {
    setTime(new Date().toString())
  }
  // if we want to call useEffect everytime something happens in UI, then don't provide second arg
  // but if we provide [], then the useEffect is called only once when component is loaded
  useEffect(() => {
    console.log("Component mounted or updated")
    // for unmounting:
    const interval = setInterval(showDate, 1000)
    return () => {
      console.log("Cleanup of interval")
      clearInterval(interval)
    }
  }, [])
  
  useEffect(() => {
    console.log("Time changed")
  }, [time])

  useEffect(() => {
    console.log("Message changed")
  }, [message])
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changed Functional Component")}>
        Change Message
      </button>
    </div>
  )
}

export default FComponent