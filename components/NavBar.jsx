"use client";

import React from "react";
import Link from "next/link";
import styles from "@/../styles/NavBar.module.scss";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div className={styles.navBar}>
      {/* This will be a logo */}
      <Link
        className={styles.logo_link}
        href="/"
        onClick={() => {
          setshowMenu(false);
        }}
      >
        BlogIT
      </Link>
      <nav className={styles.nav}>
        <ul
          className={
            showMenu ? `${styles.links} ${styles.show_links}` : styles.links
          }
        >
          <li className={styles.link_container}>
            <Link
              className={styles.link}
              href="/company"
              onClick={() => {
                setshowMenu(false);
              }}
            >
              Company
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link
              className={styles.link}
              href="/products"
              onClick={() => {
                setshowMenu(false);
              }}
            >
              Products
            </Link>
          </li>
          <li className={styles.link_container}>
            <Link
              className={styles.link}
              href="/about"
              onClick={() => {
                setshowMenu(false);
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={styles.burger}
        onClick={() => {
          console.log("CARECHIMBA");
          toggleMenu();
        }}
      ></div>
    </div>
  );
};

export default NavBar;
