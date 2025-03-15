import { Bloc2_2 } from "@/type/_pages";
import React from "react";
import { Button } from "@/components/ui/button";
const index = ({ data }: { data: Bloc2_2 }) => {
  return (
    <div className="container mx-auto px-4 lg:px-[calc(32px)] mb-16" data-aos="fade-up">
      <form className="form flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-14 w-full">
          {data.btn_1.slice(0, 1).map((item, index) => (
            <label key={index} className="w-[100px]">{item}</label>
          ))}
          {data.btn_1.slice(1, 2).map((item, index) => (
            <input
              key={index}
              type="text"
              placeholder={item}
              className="w-full border border-secondary rounded-full px-4 py-3 focus:outline-none"
            />
          ))}
        </div>
        <div className="flex items-center gap-14 w-full">
          {data.btn_2.slice(0, 1).map((item, index) => (
            <label key={index} className="w-[100px]">{item}</label>
          ))}
          {data.btn_2.slice(1, 2).map((item, index) => (
            <input
              key={index}
              type="text"
              placeholder={item}
              className="w-full border border-secondary rounded-full px-4 py-3 focus:outline-none"
            />
          ))}
        </div>
        <div className="flex items-center gap-14 w-full">
          <label className="w-[100px]">{data.btn_3}</label>
          <textarea className="w-full border border-secondary rounded-full py-3 focus:outline-none"></textarea>
        </div>
        <div className="flex items-center gap-14 w-full">
            {data.btn_4.slice(0, 1).map((item, index) => (
                <label key={index} className="w-[90px]">{item}</label>
            ))}
            <div className="flex items-center space-x-2 flex-col lg:flex-row">
                <label
                htmlFor="file-upload"
                className="inline-flex cursor-pointer items-center py-2 text-[20px] font-medium text-[#1E88F9] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-980 focus:ring-offset-2 dark:bg-gray-80 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-980"
                >
                <svg width="32px" height="32px">
                    <use xlinkHref="/images/icons.svg#icon-file"></use>
                </svg>    
                {data.btn_4.slice(1, 2).map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                </label>
                <input id="file-upload" type="file" className="sr-only" />
                {data.btn_4.slice(2, 3).map((item, index) => (
                    <p key={index} className="text-[18px] text-[#999]">(*{item})</p>
                ))}
            </div>
        </div>
        <div className="flex justify-end items-center gap-4 w-full mt-4">
          <Button
            variant={"outline"}
            className="!w-full md:!w-[160px] relative flex justify-center items-center transition-all rounded-3xl px-4 py-3 hover:bg-primary hover:text-white h-auto text-[16px] lg:text-[18px]"
          >
            {data.btn_5}
          </Button>
          <Button className="!w-full md:!w-[160px] relative flex justify-center items-center transition-all rounded-3xl px-4 py-3 h-auto text-[16px] lg:text-[18px]">
            {data.btn_6}
            <svg width="24px" height="24px">
                <use xlinkHref="/images/icons.svg#icon-evelop"></use>
            </svg> 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default index;
