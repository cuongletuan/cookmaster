import React from "react";
import Link from "next/link";
import { Footer } from "@/type/_pages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Index = ({ data }: { data: Footer }) => {
  useGSAP(() => {
    gsap.to(".link-chat", {
      rotation: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <footer className="bg-brown text-white">
      <div className="container px-4 lg:px-[calc(32px)] py-10 mx-auto">
        <div className="flex flex-col justify-center gap-3 text-center md:grid lg:grid-cols-4 md:grid-cols-3">
          <div className="font-medium text-center lg:text-left">
            {Object.values(data.address).map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="lg:col-span-3 md:col-span-2">
            <div className="flex flex-col gap-3 justify-center text-center md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-10">
              {data.links.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-center lg:text-left hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.30)] w-full mt-4">
          <div className="block md:flex w-full md:justify-between pt-[26px]">
            <p className="text-center lg:text-left">© BASIC 2024</p>
            <div className="socials">
              <ul className="md:flex hidden items-center gap-4">
                <li>
                  <Link href="">
                    <svg width="32" height="32">
                      <use xlinkHref="/images/icons.svg#icon-face"></use>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <svg width="32" height="32">
                      <use xlinkHref="/images/icons.svg#icon-instagram"></use>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <svg width="32" height="32">
                      <use xlinkHref="/images/icons.svg#icon-youtube"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-5 bottom-5">
        <svg width="56" height="56" className="cursor-pointer link-chat">
          <use xlinkHref="/images/icons.svg#icon-chat"></use>
        </svg>
      </div>
    </footer>
  );
};

export default Index;
