import React from 'react'

const Ref = () => {
 const container = React.useRef(null)
 console.log(container.current)
      return (
            <div ref={container}>
                  hello world
            </div>
      )
}

export default Ref
