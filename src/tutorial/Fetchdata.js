import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const Fetchdata = () => {
  const [users, setusers] = useState([]);

   const removeitem = (id) =>{
    let newuser = users.filter(user_remove => user_remove.id !== id)
    setusers(newuser)
 }

  const data = async () => {
    const response = await fetch(url);
    const usergotten = await response.json();
    setusers(usergotten);
  };

  useEffect(() => {

    data();

  }, []);
  return <div>
   <ul className="list">
         {users.map(user => {
            const {id,login,avatar_url,html_url} = user
              return <li key={id}>
                   <img src={avatar_url} alt={login}/>
                   <div>
                      <strong>{login}</strong>
                      <a href={html_url}>Profile</a>
                      <button onClick={() => removeitem(id)} >remove person</button>
                   </div>
              </li>
         })}
   </ul>
  
  </div>;
};

export default Fetchdata;
