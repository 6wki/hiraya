"use client";
import Image from "next/image";
import styles from "./reviews.module.css";
import pic from "../../../../../../public/bannerHijab.png";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  return (
    <div className={styles.slideContainer + " containerSettings"}>
      <h2 className="titleMain">REZENSION</h2>
      <div className={styles.slider}>
        <Slide autoplay={false} arrows={true}>
          <div className={styles.eachSlideEffect}>
            <div className={styles.top}>
              <div className={styles.secondContainer}>
                <div className={styles.top}>
                  <span>Hiraya</span>
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
                  <span>Slide 1</span>
                </div>
                <p className={styles.bottom}>this is really amazing</p>
              </div>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)",
              }}
            >
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
              }}
            >
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
