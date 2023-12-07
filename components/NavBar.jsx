import React from "react";
import Link from "next/link";
import styles from "@/../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      {/* This will be a logo */}
      <Link href="/">BlogIT</Link>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link_container}>
            <Link href="/">Company</Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/">Products</Link>
          </li>
          <li className={styles.link_container}>
            <Link href="/">About</Link>
          </li>
        </ul>
        <div className={styles.burger}></div>
      </nav>
    </div>
  );
};

export default NavBar;
