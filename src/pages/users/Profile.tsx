
import React, { useContext } from "react"
import { UserContext } from "./UserContext";

const Profile = () => {
  const {user} = useContext(UserContext);

  console.log(user)

  return (
    <div>Profile of: </div>
  )
}


export default Profile