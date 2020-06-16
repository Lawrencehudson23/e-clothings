import React, { useState } from "react";
import "./Login.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { loginWithGoogle, auth } from "../../firebase/firebase.utils";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <h2>I have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={loginWithGoogle} isGoogleSignIn type="button">
            Signin Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default Login;
