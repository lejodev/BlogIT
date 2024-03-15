// "use client";

import React from "react";
import styles from "../../../styles/register.module.scss";
import SignIn from "../../../components/SignIn";
import SignUp from "../../../components/SignUp";

const Login = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Login;
