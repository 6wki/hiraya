"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import logout from "@/../public/logout.svg";

const Logout = () => {
  return (
    <button onClick={() => signOut()}>
      <Image src={logout} height={40} width={40} alt="Orders" />
    </button>
  );
};

export default Logout;
