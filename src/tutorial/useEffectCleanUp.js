import React, { useEffect, useState } from "react";


const useEffectCleanUp = () => {
 const [size, setsize] = useState(window.innerWidth)
  const checkSize = () => {
     setsize(window.innerWidth)
  }
   useEffect(() => {
             console.log("effect working")
         window.addEventListener('resize', checkSize)
        
         return () => {
                     console.log("cleaned up")
             window.removeEventListener('resize', checkSize)  
      
         }
   })
              console.log("other renders")
      return (
            <div>
                  <h1>Window Screen Size</h1>
                  <h2>{size} px</h2>
            </div>
      )
}

export default useEffectCleanUp

