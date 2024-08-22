import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    sub: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      formErrors.username = "Username is required";
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    // Password validation
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // Role validation
    if (!formData.role) {
      formErrors.role = "Role is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form is valid. Submitting form...", formData);
      // Perform the form submission or any other logic here
    } else {
      console.log("Form is invalid. Fix errors and try again.");
    }
  };
  return (
    <div>
      <h4>Form Validation</h4>
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
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
          <div>
            <label htmlFor="email">email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
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
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
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
            {errors.role && <p style={{ color: "red" }}>{errors.role}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
