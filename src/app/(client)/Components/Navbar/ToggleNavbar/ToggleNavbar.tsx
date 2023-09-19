"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./toggleNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { open, update } from "@/redux/slices/toggleState";

const ToggleNavbar = ({ links }: any) => {
  const isOpen = useSelector((state: RootState) => state.counter.value);
  const updateState = useSelector((state: RootState) => state.counter.update);
  const dispatch = useDispatch();

  const handleToggle = () => {
    // Dispatch the update action
    dispatch(open());
    console.log("updated");
    console.log(isOpen);
  };

  const handleUpdate = () => {
    dispatch(open());
    dispatch(update());
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="openNavMobile">
      <input type="checkbox" id="checkbox" key={updateState} />
      <label onClick={handleToggle} htmlFor="checkbox" className="toggle">
        <div className="bar bar--top"></div>
        <div className="bar bar--middle"></div>
        <div className="bar bar--bottom"></div>
      </label>
      <div className={isOpen ? "categories open" : "categories"}>
        <ul>
          {links.map((link: string) => (
            <label key={link} onClick={handleUpdate} htmlFor="checkbox">
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
