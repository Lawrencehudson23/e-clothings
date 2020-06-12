import React from "react";
import Login from "../../components/Login/Login";

// import "./LoginReg.scss";
import Registration from "../../components/Registration/Registration";
import { LoginRegContainer } from "./LoginReg.styles";
const LoginReg = () => (
  <LoginRegContainer>
    <Login />
    <Registration />
  </LoginRegContainer>
);

export default LoginReg;
