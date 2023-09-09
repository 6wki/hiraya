"use client";
import Image from "next/image";
import styles from "./reviews.module.css";
import pic from "../../../../../../public/bannerHijab.png";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const properties = {
    prevArrow: (
      <button className={styles.arrow + " " + styles.leftArrow}>
        <img src="/arrow.svg" alt="" />
      </button>
    ),
    nextArrow: (
      <button className={styles.arrow + " " + styles.rightArrow}>
        <img src="/arrow.svg" alt="" />
      </button>
    ),
  };

  return (
    <div className={styles.slideContainer + " containerSettings"}>
      <h2 className="titleMain">REZENSION</h2>
      <div className={styles.slider}>
        <img src="/blop.svg" className={styles.blop} alt="" />
        <Slide
          easing="cubic-out"
          autoplay={true}
          arrows={true}
          duration={3000}
          {...properties}
        >
          <div className={styles.eachSlideEffect}>
            <div className={styles.top}>
              <div className={styles.secondContainer}>
                <div className={styles.top}>
                  <span>HIRAYA</span>
                  <div className={styles.account}>
                    <Image
                      src={pic}
                      height={0}
                      width={0}
                      alt="review"
                      className={styles.reviewPicture}
                    />
                    <span>@user123</span>
                  </div>
                  <img src="/ratting.svg" />
                </div>
                <p className={styles.bottom}>this is really amazing</p>
              </div>
            </div>
          </div>
          <div className={styles.eachSlideEffect}>
            <div className={styles.top}>
              <div className={styles.secondContainer}>
                <div className={styles.top}>
                  <span>HIRAYA</span>
                  <div className={styles.account}>
                    <Image
                      src={pic}
                      height={0}
                      width={0}
                      alt="review"
                      className={styles.reviewPicture}
                    />
                    <span>@user123</span>
                  </div>
                  <img src="/ratting.svg" />
                </div>
                <p className={styles.bottom}>this is really amazing</p>
              </div>
            </div>
          </div>
          <div className={styles.eachSlideEffect}>
            <div className={styles.top}>
              <div className={styles.secondContainer}>
                <div className={styles.top}>
                  <span>HIRAYA</span>
                  <div className={styles.account}>
                    <Image
                      src={pic}
                      height={0}
                      width={0}
                      alt="review"
                      className={styles.reviewPicture}
                    />
                    <span>@user123</span>
                  </div>
                  <img src="/ratting.svg" />
                </div>
                <p className={styles.bottom}>this is really amazing</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
