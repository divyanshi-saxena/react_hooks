import React from 'react'
import useScreen from '../custom hooks/useScreen'

const ScreenComponent = () => {
  const screenSize = useScreen()
  return (
    <div>
      <h1>ScreenComponent</h1>
      <h2>We are in {screenSize} screen</h2>
    </div>
  )
}

export default ScreenComponent