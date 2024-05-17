// "use client";

import { Sessioprovider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  return <Sessioprovider>{children}</Sessioprovider>;
};
