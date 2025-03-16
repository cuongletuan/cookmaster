"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Bloc2, CartePoint } from "@/type/_pages";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconMaps, IconTabs } from "@/const";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const RandomPoint = ({
  point,
  active,
}: {
  point: CartePoint;
  active: string;
}) => {
  const [position, setPosition] = useState({ left: "50%", top: "50%" });
  const src = useMemo(
    () => IconMaps[!!active ? active : point?.activities[0]],
    [active, point]
  );

  useEffect(() => {
    const x = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    const y = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    setPosition({ left: `${x}%`, top: `${y}%` });
  }, []);
  useEffect(() => {
    const icons = document.querySelectorAll(".icon-map");

    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          y: -5,
          repeat: 3,
          yoyo: true,
          duration: 0.15,
          ease: "power1.inOut",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.killTweensOf(icon);
        gsap.to(icon, { y: 0, duration: 0.2, ease: "power1.out" });
      });
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {});
        icon.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
  return (
    <Popover>
      <PopoverTrigger
        className="absolute cursor-pointer"
        style={{ left: position.left, top: position.top }}
      >
        {!!src && (
          <Image
            src={src}
            alt={point.name}
            width={48}
            height={57}
            className="icon-map"
          />
        )}
      </PopoverTrigger>
      <PopoverContent>
        <p className="font-medium text-primary">{point.name}</p>
        <p>{point.address}</p>
      </PopoverContent>
    </Popover>
  );
};

const Index = ({ data, points }: { data: Bloc2; points: CartePoint[] }) => {
  const [active, setActive] = useState("");
  const filterPoint = useMemo(() => {
    if (!points.length) return [];
    const res = JSON.parse(JSON.stringify(points)) as CartePoint[];
    if (!active) return res.slice(0, 4);
    return res.filter((point) => point.activities.includes(active));
  }, [active, points]);
  return (
    <div
      className="w-screen lg:min-h-[666px] bg-[url('/images/bg-map.jpg')] bg-cover bg-no-repeat flex items-center md:items-start justify-center"
      data-aos="fade-up"
    >
      <div className="container mx-auto lg:my-16 my:14 px-4 py-5 lg:py-0 lg:px-[calc(32px)]">
        <div className="py-10">
          <div className="relative border-[1px] border-[#BBB]">
            <div className="absolute z-8 -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit whitespace-nowrap px-10 bg-[#FFF6F4] lg:h-[60px]">
              <h2 className="text-center text-primary text-[24px] md:text-[32px] lg:text-[40px] 3xl:text-[52px] font-semibold uppercase">
                {data.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-3 w-full flex-wrap">
          {data.cases.map((item, index) => (
            <div
              onClick={() => setActive(item)}
              key={index}
              className="cursor-pointer rounded-3xl text-[14px] lg:text-[20px] border border-primary-50 px-4 py-2 bg-white hover:bg-[#FFF4F1] flex items-center gap-2"
            >
              <svg width="28px" height="28px">
                <use xlinkHref={IconTabs[index]}></use>
              </svg>
              {item}
            </div>
          ))}
        </div>
        <div className="py-4 mt-3 relative overflow-hidden">
          <Image
            src="/images/img-google.jpg"
            alt=""
            width={1240}
            height={698}
            quality={100}
            className="w-full object-cover lg:h-[698px] h-[748px] rounded-3xl"
          />
          <div className="points">
            {filterPoint.map((item, index) => (
              <RandomPoint key={index} point={item} active={active} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
