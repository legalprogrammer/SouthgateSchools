import React,{useEffect,useState} from "react";

const url = "https://api.github.com/users/QuincyLarson";

const Conditionalrendering = () => {



  const [loading, setloading] = useState(true);
  const [iserror, setiserror] = useState(false);
  const [user, setuser] = useState("default user");
  
  const rendering = async () => {
    const res = await fetch(url);
    if (res.status >= 200 && res.status <= 290) {
        const usergotten = await res.json();
          const { login } = usergotten;
          setloading(false);
           setuser(login);
    }else{
       setloading(false)
       setiserror(true)
       throw new Error(res.statusText);
    }
  
  };
 useEffect(() => {
    rendering();
    
  }, []);


  if (loading) {
    return <h2>loading</h2>;
  }
  if (iserror) {
    return <h2>error</h2>;
  }



 
  return <div>
     <h2>{user}</h2> 
  </div>;
};

export default Conditionalrendering;
