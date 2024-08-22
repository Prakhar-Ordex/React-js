import React, { useState } from "react";

const HandleForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    sub: false,
  });
  

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((pre) => ({ ...pre, [name]: type === "checkbox" ? checked : value, }));
  };

    const onSubmit = (e) => {
        e.preventDefault()
      console.log(formData)
    }
    
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="sub">Subscribe:</label>
          <input
            type="checkbox"
            id="sub"
            name="sub"
            value={formData.sub}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={onChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HandleForm;
