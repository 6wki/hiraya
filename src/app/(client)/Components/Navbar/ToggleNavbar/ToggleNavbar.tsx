"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./toggleNavbar.css";

const ToggleNavbar = ({ links }: any) => {
  const [open, setOpen] = useState(false);
  const [updateState, setUpdateState] = useState(0);

  const openNavbar = () => {
    setOpen(!open);
  };

  const update = () => {
    setUpdateState((prev) => prev + 1);
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div className="openNavMobile">
      <input type="checkbox" id="checkbox" key={updateState} />
      <label onClick={openNavbar} htmlFor="checkbox" className="toggle">
        <div className="bar bar--top"></div>
        <div className="bar bar--middle"></div>
        <div className="bar bar--bottom"></div>
      </label>
      <div className={open ? "categories open" : "categories"}>
        <ul>
          {links.map((link: string) => (
            <label key={link} onClick={update} htmlFor="checkbox">
              <Link href={`/admin/${link}`}>
                <li>{link} </li>
              </Link>
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToggleNavbar;
