import { useLoaderData } from "react-router-dom";

// import { useEffect, useState } from "react";
const Github = () => {
  const data=useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <h1 className="bg-gray-700 text-center text-3xl text-white p-4">
        Github followers:{data.followers}
      </h1>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/hiteshchoudary')
  return response.json()
} 
