import React, { useState } from "react";
import "./Login.scss";
import FormInput from "../FormInput/FormInput";

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
      ...formState,
      [name]: value,
    });
  }

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

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
        <button>Login</button>
      </form>
    </div>
  );
}
