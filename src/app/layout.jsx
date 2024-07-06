"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../../components/NavBar";
// import { Inter } from "next/font/google";
import React, { Suspense, useEffect } from "react";
import Footer from "../../components/Footer";
import { CookiesProvider } from "react-cookie";
import StoreProvider from "../redux/StoreProvider";
import AuthProvider from "../../components/AuthProvider";

// export const metadata = {
//   title: "BlogIT",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <StoreProvider>
      <html>
        <body>
          <CookiesProvider>
            <AuthProvider>
              <MyNavbar />
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              <Footer />
            </AuthProvider>
          </CookiesProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
