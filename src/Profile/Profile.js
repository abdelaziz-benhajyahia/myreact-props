import React from 'react'
import { Button } from 'react-bootstrap'
const Profile = (props) => {
    const handleName = (fullName) => alert(`The user name is: ${props.fullName}`)
  return (
    <div>
        <h1>User Profile</h1>
        <br />
        {props.children}
        <h3>{props.fullName}</h3>
        <h3>{props.bio}</h3>
        <h3>{props.profession}</h3>
        <br />
        <Button variant="danger" onClick={handleName}>Click for ALERT</Button>
    </div>
  )
}

export default Profile
Profile.defaultProps={
  fullName: "FullName FullName",
  bio: "bio bio",
  profession: "profession profession"
}

Profile.protoType={
  fullName: Profile.string,
  bio: Profile.string,
  profession: Profile.string
}