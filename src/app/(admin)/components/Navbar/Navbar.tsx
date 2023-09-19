"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/hiraya.svg";
// import { useEffect, useState } from "react";
import AboveNavbar from "@/app/(client)/Components/Navbar/AboveNavbar/AboveNavbar";
import shoppingCartIcon from "@/../public/shoppingCartIcon.svg";
import { useEffect, useState } from "react";
import ToggleNavbar from "@/app/(client)/Components/Navbar/ToggleNavbar/ToggleNavbar";
import Logout from "../Logout/Logout";
import { useDispatch } from "react-redux";
import { open, update } from "@/redux/slices/toggleState";

const AdminNavbar = () => {
  // Scrolling State

  const [scroll, setScroll] = useState("");

  const links = ["add", "orders"];
  // Scrolling Function Animation

  const scrolling = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setScroll("") : setScroll(styles.scrollNavbar);
    }
  };

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
        <Link onClick={handleUpdate} href="/">
          <Image src={logo} width={100} height={0} alt="hiraya" />
        </Link>
        <ul className={styles.navbarCategories}>
          <>
            <Link href="/admin/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link href="/admin/add">
              <li>Add Product</li>
            </Link>
            <Link href="/admin/orders">
              <li>Orders</li>
            </Link>
          </>
        </ul>
        <ul>
          <li onClick={handleUpdate}>
            <Logout />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
