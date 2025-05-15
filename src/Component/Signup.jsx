import React, { useState } from "react";
import useAuthStore from "../Store/AuthStore";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const signup = useAuthStore((state) => state.signup);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a signup process (this could be replaced with an API call)
    const userData = { email, name }; // Dummy user data
    signup(userData);
    alert("Signed up successfully!");
    navigate('/login')
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;