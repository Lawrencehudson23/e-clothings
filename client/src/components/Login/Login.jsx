import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth } from "../../firebase/firebase.utils";
import { googleSignInStart } from "../../redux/user/user.actions";

import "./Login.scss";
const Login = ({ googleSignInStart }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = formState;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      setError("The email or password you have entered is invalid.");
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
        {error ? <span style={{ color: "red" }}>{error}</span> : ""}
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
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            type="button"
          >
            Signin Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(Login);
