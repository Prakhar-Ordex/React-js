import React from 'react'
import { Link, useParams } from 'react-router-dom'

const userData = {
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 5, name: 'Tom Johnson', email: 'tom@example.com' },
      { id: 6, name: 'Sarah Johnson', email: 'sarah@example.com' },
    
    ]
}


const UserProfile = () => {
    const { id } = useParams();
    console.log(id);
    const user = userData.users.find(user => user.id === parseInt(id));
  return (
    <>
          <h2>User Profile</h2>
          {
              user? (
                  <div>
                      <h3>Name: {user.name}</h3>
                      <p>Email: {user.email}</p>
                  </div>
              ) : (
                  <p>No user found with this ID</p>
              )
          }

         <h1> <Link to={`/user`}>back to the user </Link></h1>
    </>
  )
}

export default UserProfile
