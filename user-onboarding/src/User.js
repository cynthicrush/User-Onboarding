import React from 'react'



function User({ details }) {
  if (!details) {
    return <h3>Loading user details...</h3>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Terms of Service: {details.tos}</p>
    </div>
  )
}

export default User