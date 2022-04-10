import { useState } from "react";
export default function useCounter(initialValue, step) {
  const [value, setValue] = useState(initialValue)
  const increment = () => {
    // return setValue(value + 1)
    return setValue(value + step)
  }
  const decrement = () => {
    // return setValue(value - 1)
    return setValue(value - step)
  }
  const reset = () => {
    return setValue(initialValue)
  }
  return [value, increment, decrement, reset]
}