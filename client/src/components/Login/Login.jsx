import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./Login.scss";
const Login = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
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
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
