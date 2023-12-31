import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";

// import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogIT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
