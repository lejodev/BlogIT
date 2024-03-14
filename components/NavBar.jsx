// "use client";

// import React, { useEffect } from "react";
// import { useSession } from "next-auth/react";
// import {cookies} from "next/headers"
// import { getCookies } from "cookies-next";
import Link from "next/link";
import styles from "@/../styles/NavBar.module.scss";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Modal from "./Modal";
// import { getServerSession } from "next-auth";

function NavBar() {
  const [showMenu, setshowMenu] = useState(false);

  const { data: session } = useSession();
  console.log("=============", session);

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
      <nav
        className={
          showMenu ? `${styles.links} ${styles.show_links}` : styles.links
        }
      >
        <ul className={styles.menu}>
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
          {session ? (
            session.user.role === "writer" ? (
              <li className={styles.link_container}>
                <Link
                  className={styles.link}
                  href="/create"
                  onClick={() => {
                    setshowMenu(false);
                  }}
                >
                  create
                </Link>
              </li>
            ) : (
              false
            )
          ) : (
            false
          )}

          {session ? (
            <li className={styles.link_container}>
              <Link
                className={styles.link}
                href="/api/auth/signout"
                onClick={() => {
                  setshowMenu(false);
                }}
              >
                Signout
              </Link>
            </li>
          ) : (
            <li className={styles.link_container}>
              <Link
                className={styles.link}
                href="/register"
                onClick={() => {
                  setshowMenu(false);
                }}
              >
                <span className={styles.menu_title}>Log In</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div
        className={styles.burger}
        onClick={() => {
          toggleMenu();
        }}
      ></div>
    </div>
  );
}

export default NavBar;
