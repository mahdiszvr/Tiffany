import Popular from "./Popular.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./style.css";

const PopularJewelry = ({ popular }) => {
  return (
    <>
      <div className="my-4 md:my-[60px]">
        <h4 className="h-16 px-14 font-Santral3 text-lg text-center">
          Most Popular Jewelry
        </h4>
        <div className="w-full px-4 md:px-10 lg:px-[52px]">
          <Swiper
            spaceBetween={6}
            slidesPerView={3}
            slidesPerGroup={3}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              760: {
                spaceBetween:10 ,
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            className="mySwiper w-full "
          >
            {popular && popular
              ? popular.map((elem, index) => {
                  return (
                    <SwiperSlide className="w-full flex flex-row gap-2 md:gap-4 lg:gap-2 text-center">
                      <Popular popular={elem} key={index} />
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        </div>

        <div className="my-5 md:mb-8 flex justify-center items-center">
          <a
            href="#"
            className="w-[100px] md:w-[120px] h-9 md:h-10 font-Santral4 text-xs md:text-sm flex justify-center items-center border border-black "
          >
            {" "}
            <span className="hover:border-b-2 border-[#81D8D0]">Shop Now</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default PopularJewelry;
