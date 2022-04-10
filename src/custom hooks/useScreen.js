import { useEffect, useState } from "react";

export default function useScreen() {
  const [screenSize, setScreenSize] = useState()
  const checkScreenSize = () => {
    if (window.innerWidth > 992) return setScreenSize("large")
    if (window.innerWidth < 992 && window.innerWidth > 600) return setScreenSize("medium")
    if (window.innerWidth < 600) return setScreenSize("small")
  }
  useEffect(() => {
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    // cleanup function
    return () => {
      window.removeEventListener("resize", ()=>{})
    }
  },[]) // will be called only once when the component is mounted
  return screenSize
}