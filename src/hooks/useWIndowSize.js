import { useState, useEffect } from "react"

const useWIndowSize = () => {
    const [screenDim, setSceenDim] = useState({
        width:window.innerWidth,
        height:window.innerHeight,
      })
    
      useEffect(()=>{
        const handleResize = (e) => {
          setSceenDim({
            width:window.innerWidth,
            height:window.innerHeight,
          })
        }
  
        window.addEventListener("resize",handleResize)
        return(()=>{
          window.removeEventListener("resize",handleResize)
        })
      },[])
    
    return ({screenDim})
}

export default useWIndowSize
