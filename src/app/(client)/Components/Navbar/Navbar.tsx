"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/hiraya.svg";
// import { useEffect, useState } from "react";
import AboveNavbar from "@/app/(client)/Components/Navbar/AboveNavbar/AboveNavbar";
import CartIcon from "./CartIcon/CartIcon";
import shoppingCartIcon from "@/../public/shoppingCartIcon.svg";
import { useEffect, useState } from "react";
import ToggleNavbar from "./ToggleNavbar/ToggleNavbar";
import { useDispatch } from "react-redux";
import { open, update } from "@/redux/slices/toggleState";

const ClientNavbar = () => {
  // Scrolling State

  const [scroll, setScroll] = useState("");

  // Scrolling Function Animation

  const scrolling = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setScroll("") : setScroll(styles.scrollNavbar);
    }
  };

  const links = ["abaya", "khimar", "hijab"];

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    setScroll(styles.scrollNavbar);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(open());
    dispatch(update());
  };

  return (
    <nav className={`${styles.navbar} ${scroll} `}>
      <AboveNavbar />
      <div className={styles.NavbarContent}>
        <ToggleNavbar links={links} />
        <Link href="/" onClick={handleUpdate}>
          <Image src={logo} width={100} height={0} alt="hiraya" />
        </Link>
        <ul className={styles.navbarCategories}>
          <>
            <Link href="/abaya">
              <li>Abaya</li>
            </Link>
            <Link href="/khimar">
              <li>Khimar</li>
            </Link>
            <Link href="/jilbab">
              <li>Jilbab</li>
            </Link>
          </>
        </ul>
        <ul>
          <li>
            <Link href="/cart" className={styles.cart}>
              <CartIcon />
              <Image
                src={shoppingCartIcon}
                alt="Shopping Cart"
                width={0}
                height={0}
                style={{ scale: "1.2", cursor: "pointer" }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ClientNavbar;
