export const validateForm = (newUser) => {
    const errors = {};
    if (!newUser.name.trim()) errors.name = "Name is required";
    if (!newUser.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(newUser.email))
      errors.email = "Invalid email address";
    if (!newUser.password.trim()) {
      errors.password = "Password is required";
    } else if (newUser.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } 
    if (!newUser.avatar.trim()) errors.avatar = "Avatar URL is required";
    return errors;
  };