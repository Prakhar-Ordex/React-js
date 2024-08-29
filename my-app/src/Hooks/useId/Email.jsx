import React, { useId } from 'react'

const Email = () => {
    const id  = useId()
  return (
    <div>
          <p>This is the Email Component</p>
          <label htmlFor={id}>Email</label>
        <input type="email" placeholder="Enter your email" id={id} />
        <button type="submit">Submit</button>
    </div>
  )
}

export default Email
