import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../ReduxToolkit/AuthSlice";

const Signin = ({ togglePanel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("Login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Login</h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email ..."
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password ..."
        />
        <div>
          <Button
            fullWidth
            className="customeButton"
            type="submit"
            sx={{ padding: ".9rem" }}
          >
            Login
          </Button>
        </div>
      </form>
      <div>
        <span>Don't have an account?</span>
        <Button onClick={togglePanel}>Signup</Button>
      </div>
    </div>
  );
};

export default Signin;
