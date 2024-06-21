import Cookies from "js-cookie";

export const setUserCookie = (cookie) => {
  Cookies.set("token", cookie);
};

export const getUserCookie = (tokenName) => {
  return Cookies.get(tokenName);
};
