import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
