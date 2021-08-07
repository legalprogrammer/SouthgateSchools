import React from "react";


let url = `https://api.themoviedb.org/3/movie/550?api_key=45acf61e0a841c9f2ac4a1b1f46832de`;

const Moviedb = () => {
  const moviedbdatafetch = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
  };

   React.useEffect(() => {
         moviedbdatafetch()
   }, [])
  return <div></div>;
};

export default Moviedb;
