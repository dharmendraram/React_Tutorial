import { useParams } from "react-router-dom"

const User = () => {
    const {userId} = useParams([])
  return (
    <>
     <h1 className='bg-gray-700 text-white  text-center text-3xl p-4'>User:{userId} </h1> 
    </>
  )
}

export default User
