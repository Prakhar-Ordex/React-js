import React from 'react'
import { Link } from 'react-router-dom'

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

const UserList = () => {

  return (
    <div>
          <h1>User List </h1>
          
          <ul>
              {
                  userData.users.map(user => {
                      return <li key={user.id}>
                          <Link to={`/user/${user.id}`}>{user.name}</Link>
                      </li>
                  })
              }
          </ul>
    </div>
  )
}

export default UserList
