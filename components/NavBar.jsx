import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      {/* NAVBAR */}
      This will be a logo
      <Link href="/">BlogIT</Link>
      <nav>
        <ul>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
          <li>
            <Link href="about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
