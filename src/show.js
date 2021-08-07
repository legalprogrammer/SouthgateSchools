import React,{useState} from "react";

const Show = () => {
    const [showed, setshowed] = useState(false)

   

  return <div>

      <button className="btn" onClick={()=> {
        setshowed(!showed)  
      
      }}>show/hide</button>
            {showed && <Text/>}
  </div>;
  
};


const Text = () => {
   const [size, setsized] = useState(window.innerWidth)
    
    const checksize = () => {
          setsized(window.innerWidth)
    }
    
    
   React.useEffect(() => {
       window.addEventListener('resize', checksize)
         return () => {
                window.removeEventListener('resize', checksize)
         }
   }, [])  
      return(
          <div>
               <h3>window</h3>
               <h3>size : {size} px</h3>
          </div>
      
      )
}


export default Show;
