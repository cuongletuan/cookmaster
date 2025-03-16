import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bloc1 } from "@/type/_pages";
import { ARTICLES } from "@/const";

const Index = ({ data }: { data: Bloc1 }) => {
  return (
    <div
      className="container mx-auto my-16 px-4 lg:px-[calc(32px)]"
      data-aos="fade-up"
    >
      <div className="lg:py-10 mb-5 lg:mb-0">
        <div className="relative lg:border-[1px] lg:border-[#BBB]">
          <div className="lg:absolute z-8 lg:-top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-fit lg:px-10 bg-white lg:h-[60px]">
            <h2 className="text-center text-primary whitespace-break-spaces lg:whitespace-nowrap text-[24px] md:text-[32px] lg:text-[40px] 3xl:text-[52px] font-semibold uppercase">
              {data.title}
            </h2>
          </div>
        </div>
        <h6 className="text-center lg:mb-10 lg:mt-[30px] 3xl:mt-[37px] text-sm md:text-[18px] lg:text-[20px] 3xl:text-[24px]">
          {data.subtitle}
        </h6>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {Object.values(data.cases).map((item, index) => (
          <Card key={index} className="w-full flex flex-col gap-4 lg:gap-6">
            <CardHeader className="relative overflow-hidden rounded-[8px]">
              <Link href="">
                <Image
                  src={ARTICLES[index]}
                  alt=""
                  width={397}
                  height={397}
                  quality={100}
                  className="w-full rounded-[8px] h-[200px] md:h-[240px] lg:h-[397px] object-cover hover:scale-110 duration-300 ease-in"
                />
              </Link>
            </CardHeader>
            <CardContent className="px-0">
              <h6 className="text-[12px] lg:text-[20px] text-primary font-medium">
                {item.category}
              </h6>
              <h2 className="text-[16px] lg:text-[28px] font-medium text-secondary hover:text-primary">
                <Link href="">{item.category}</Link>
              </h2>
              <p>{item.description}</p>
            </CardContent>
            <CardFooter className="px-0">
              <Button
                variant={"outline"}
                className="text-[14px] lg:text-[18px] font-medium border-secondary-30 hover:bg-primary
                         hover:text-white px-10 py-5"
              >
                <span>{item.cta}</span>
                <svg width="14" height="14" className="fill-current">
                  <use xlinkHref="/images/icons.svg#icon-arrow-blue"></use>
                </svg>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
