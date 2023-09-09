"use client";

import { signOut } from "next-auth/react";
import styles from "./logout.module.css";

const Logout = () => {
  return (
    <button className={styles.logout} onClick={() => signOut()}>
      <img src="/logout.png" alt="" />
    </button>
  );
};

export default Logout;
