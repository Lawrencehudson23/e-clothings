import React, { useState } from "react";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import "./Registration.scss";
const Registration = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    const newErrors = [];

    if (password !== confirmPassword) {
      newErrors.push("Passwords don't match!");
      return;
    }
    signUpStart({ displayName, email, password });
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="registration">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {errors
        ? errors.map((error, key) => (
            <span style={{ color: "red" }} key={key}>
              {error}
            </span>
          ))
        : ""}
      <form className="registration-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Registration);
