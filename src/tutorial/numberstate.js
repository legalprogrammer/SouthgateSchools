import React, { useState } from 'react'

const Numberstate = () => {
  let [count, setcount] = useState(0)
   const decrement = () => {
       setcount(count - 1)
   }
   const reset = () => {
       setcount(0)
   }
   const complex = () => {
       setTimeout(() => {
             setcount((prev)=> {
                return prev + 1
             })
       }, 2000);
   }
      return (<React.Fragment>
            <div>
                  <h3>{count}</h3>
                  <button className="btn" onClick={()=> setcount(count + 1)}>increment</button>
                  <button className="btn" onClick={decrement}>decrement</button>
                  <button className="btn" onClick={reset}>reset</button>
            </div>
            <div>
                  <h3>{count}</h3>
                  <button className="btn" onClick={complex}>increment</button>
            </div>
            </React.Fragment>
      )
}

export default Numberstate
