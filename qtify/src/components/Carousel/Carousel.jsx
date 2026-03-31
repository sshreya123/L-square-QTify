import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

function Carousel({ data, renderItem }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Virtual]}
        virtual
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;