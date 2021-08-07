import React, { useEffect } from 'react'

const UseEffect = () => {
    const [value, setvalue] = React.useState(0)
       useEffect(() => {
             console.log("effect");
            if (value >= 1) {
                   document.title = `New messages (${value})`
            }
       },[value])
       console.log("outside effect");
      return (
            <div>
                  <h2>Use Effect basics</h2>
                  <h3>{value}</h3>
                  <button className="btn" onClick={() => {
                      setvalue(value + 1)                  
                  }}>increament</button>
            </div>
      )
}

export default UseEffect
