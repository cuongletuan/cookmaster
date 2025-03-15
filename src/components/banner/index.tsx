import React from "react";
import { BannerIcon } from "@/const";
import Link from "next/link";

const Index = ({ banner_menu = [] }: { banner_menu?: string[] }) => {
  return (
    <div className="banner relative overflow-hidden">
     <iframe
        src="https://player.vimeo.com/video/1066071996?autoplay=1&muted=1&playsinline=1&background=1&loop=0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="banner"
      className="w-screen object-cover h-[500px] lg:h-screen 3xl:h-[850px] 3xl:w-screen lg:scale-180 scale-250 relative z-0"
    ></iframe>
      <div className="container relative m-auto z-2">
        <div className="absolute left-0 bottom-[10px] lg:bottom-[30px] w-full lg:px-[calc(32px)]">
          <div className="flex justify-between px-10 py-3 lg:py-8 lg:px-40 border-t border-[rgba(255, 255, 255, 0.3)]">
            {banner_menu.map((item, index) => (
              <Link
                href=""
                key={index}
                className="group flex flex-col gap-2 items-center"
              >
                <svg
                  width="40"
                  height="40"
                  className="fill-current text-[#F0F0F0] group-hover:text-primary"
                >
                  <use xlinkHref={BannerIcon[index]}></use>
                </svg>
                <p className="group-hover:text-primary text-[#F0F0F0] hidden lg:block">
                  {item}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
