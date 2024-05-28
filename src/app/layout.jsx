"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "../../components/NavBar";
// import { Inter } from "next/font/google";
import { useEffect } from "react";
import Footer from "../../components/Footer";

// export const metadata = {
//   title: "BlogIT",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html>
      <body>
        <MyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
