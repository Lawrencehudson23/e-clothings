import React, { useState } from "react";
import "./Login.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { loginWithGoogle } from "../../firebase/firebase.utils";

export default function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setFormState({ email: "", password: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({
      [name]: value,
    });
  }

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Login with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">Login</CustomButton>
        <CustomButton onClick={loginWithGoogle}>Login with Google</CustomButton>
      </form>
    </div>
  );
}
