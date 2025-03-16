import React from "react";
import Image from "next/image";
import { Bloc5 } from "@/type/_pages";
import { Shared } from "@/const";

const index = ({ data }: { data: Bloc5 }) => {
  return (
    <div
      className="w-full py-10 bg-linear-to-b from-[#EAFCFF] to-[#FFFFFF]"
      data-aos="fade-up"
    >
      <div className="container py-10 mx-auto px-4 lg:px-8">
        <div className="mb-8 lg:space-y-2 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-[40px] px-4 lg:px-0">
          <p className="text-[18px] max-w-2xl">{data.text}</p>
          <h2 className="text-lg lg:text-4xl md:text-4xl font-medium text-secondary uppercase">
            {data.title}
          </h2>
        </div>
        <div className="relative lg:px-0">
          <Image
            src="/images/image_5.jpg"
            alt=""
            width={1920}
            height={750}
            quality={100}
            className="hidden h-[750px] lg:block w-full object-cover rounded-2xl"
          />
          {Object.values(data.reviews.slice(0, 1)).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 flex flex-col
                    md:w-[calc(100%-48px)] xl:w-[calc(100%-210px)] max-w-[1030px]
                    relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 gap-6"
            >
              <Image
                src="/images/image_6.png"
                alt=""
                width={1020}
                height={590}
                quality={100}
                className="w-full object-cover"
              />
              <div className="block lg:flex justify-between w-full">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[14px] lg:text-[24px] text-[#000] font-semibold">
                    {item.author}
                  </h2>
                  <p className="text-[#666] text-[14px] lg:text-[18px] max-w-2xl">
                    {item.review}
                  </p>
                </div>
                <p className="border text-[#000] text-[14px] lg:text-[18px] rounded-3xl px-4 h-[42px] inline-flex justify-center items-center mt-4 lg:mt-0">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Object.values(data.reviews.slice(1, 5)).map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={Shared[index]}
                  alt=""
                  width={292}
                  height={292}
                  className="w-full rounded-3xl object-cover hover:scale-110 duration-300 ease-in"
                  quality={100}
                />
              </div>
              <div
                className="absolute bottom-0 left-0 flex items-center justify-between text-sm w-full bg-[rgba(86,44,44,0.60)]
                          h-[60px] rounded-bl-3xl rounded-br-3xl px-5"
              >
                <div className="flex items-center gap-2 text-white">
                  <svg width="24px" height="24px">
                    <use xlinkHref="/images/icons.svg#icon-tele"></use>
                  </svg>
                  <span className="text-[12px] lg:text-[18px] font-medium">
                    {item.author}
                  </span>
                </div>
                <svg width="14px" height="14px">
                  <use xlinkHref="/images/icons.svg#icon-arrow"></use>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#666666] text-[14px] lg:text-[24px] mt-10">
          {data.footer}
        </p>
      </div>
    </div>
  );
};

export default index;
