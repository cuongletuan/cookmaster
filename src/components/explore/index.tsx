import React from "react";
import Image from "next/image";
import { Bloc3 } from "@/type/_pages";
import Link from "next/link";
import { Explore } from "@/const";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const index = ({ data }: { data: Bloc3 }) => {
  return (
    <div className="group">
      <div className="container 16 mx-auto px-4 lg:px-8">
        <div className="md:flex md:justify-between md:items-end lg:items-center">
          <h2 className="text-primary text-[24px] lg:text-[48px] font-semibold">
            {data.title}
          </h2>
          <a
            className="text-[#666] hidden md:flex w-[190px] text-[20px] font-medium gap-1 items-center
                cursor-pointer underline hover:text-primary"
          >
            {data.more_info}
            <svg width="24px" height="24px" className="fill-current">
              <use xlinkHref="/images/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
      </div>
      <div
        className="pl-4 lg:pl-[calc(32px+40px)] 2xl:pl-[calc(340px+105px)] flex items-center gap-4 md:gap-8 xl:gap-[30px] 
        w-screen overflow-hidden py-5"
      >
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {Object.values(data.cases).map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full min-w-[200px] md:min-w-[280px] lg:min-w-[340px] flex flex-col gap-2"
            >
              <div className="relative overflow-hidden mb-3 h-[200px] lg:h-[340px] rounded-3xl">
                <Image
                  src={Explore[index]}
                  alt=""
                  width={340}
                  height={340}
                  className="w-full object-cover hover:scale-110 duration-300 ease-in"
                  quality={100}
                />
              </div>
              <h6 className="text-[12px] lg:text-[20px] text-primary font-medium flex lg:h-[30px] overflow-hidden">
                {item.tagline}
              </h6>
              <h2 className="text-[16px] lg:text-[28px] font-medium text-[#222] hover:text-primary">
                <Link href="">{item.category}</Link>
              </h2>
              <p className="min-h-[80px]">{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="px-4">
        <a
          className="flex justify-center items-center text-[#fff] lg:hidden text-[20px] font-medium
                  cursor-pointer bg-primary rounded-3xl p-3"
        >
          {data.more_info}
          <svg width="24px" height="24px" className="fill-current">
            <use xlinkHref="/images/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default index;
