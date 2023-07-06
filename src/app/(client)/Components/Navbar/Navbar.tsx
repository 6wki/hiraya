"use client";

import styles from "./navbar.module.css";
import shoppingCartIcon from "@/../public/shoppingCartIcon.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import logo from "@/../public/hiraya.svg";
import { useEffect, useState } from "react";
import AboveNavbar from "@/app/(client)/Components/Navbar/AboveNavbar/AboveNavbar";

const ClientNavbar = async () => {
  // Scrolling State

  const [scroll, setScroll] = useState("");

  // Scrolling Function Animation

  const scrolling = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setScroll("") : setScroll(styles.scrollNavbar);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scroll} `}>
      <AboveNavbar />
      <div className={styles.NavbarContent}>
        <Link href="/">
          <Image src={logo} width={100} height={0} alt="hiraya" />
        </Link>
        <ul className={styles.navbarCategories}>
          <>
            <button
              onClick={() =>
                signIn("email", {
                  callbackUrl: "/admin/dashboard",
                })
              }
            >
              Sign In
            </button>
            <li>Abaya</li>
            <li>Jilbab</li>
            <li>Khimar</li>
          </>
        </ul>
        <ul>
          <li>
            <Image
              src={shoppingCartIcon}
              alt="Shopping Cart"
              width={0}
              height={0}
              style={{ scale: "1.2", cursor: "pointer" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ClientNavbar;
