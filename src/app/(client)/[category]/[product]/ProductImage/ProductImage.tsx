"use client";

import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./productImage.css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

export function DesktopImages({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="desktop">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={data.primary} />
        </SwiperSlide>
        {data.secondary.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={data.primary} />
        </SwiperSlide>
        {data.secondary.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function MobileImages({ data }) {
  return (
    <div className="mobile">
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={data.primary} />
        </SwiperSlide>
        {data.secondary.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
