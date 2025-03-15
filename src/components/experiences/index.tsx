import React from 'react';
import Image from 'next/image';
import { Bloc4 } from '@/type/_pages';
import { Experienced } from '@/const';

const index = ({data}:{data:Bloc4}) => {
  return (
    <div className="container lg:py-16 mx-auto px-4 lg:px-8" data-aos="fade-up">
        <div className="lg:px-4 lg:px-[calc(32px)] py-[30px] md:flex md:items-start md:gap-6 relative md:static">
            <div className="rounded-2xl md:rounded-none md:backdrop-filter-none z-[8] bg-[rgba(255,255,255,0.6)] 
            backdrop-filter-[7.5px] absolute w-[calc(100%-32px-32px)] px-3 py-4 top-1/2 left-1/2 
            -translate-y-1/2 -translate-x-1/2 md:static md:w-full md:bg-white md:inset-0 md:translate-x-0 md:translate-y-0">
                <div className="pt-[5px] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
                    <h2 className="text-primary text-[24px] lg:text-[48px] lg:leading-12">{data.title}</h2>
                    <h2 className="text-[rgba(242,84,45,0.60)] text-[24px] lg:text-[48px] lg:leading-12">{data.subtitle}</h2>
                </div>
                <div className="flex items-start gap-2 md:gap-8 lg:gap-[48px] mb-3 pt-6">
                    <span className="hidden lg:block border border-[#BBBBBB] rotate-90 w-[24px] md:rotate-0 md:w-[81px] lg:w-[81px] mt-5"></span>
                    <div className="group">
                        <h3 className="text-secondary text-base md:text-[20px] lg:text-[24px] xl:text-[28px] font-semibold">{data.text_title}</h3>
                        <p className="py-2 w-full whitespace-pre-wrap text-ellipsis line-clamp-4 overflow-hidden md:overflow-visible md:h-full md:line-clamp-none max-h-[173px] md:max-h-none md:text-wrap">{data.text}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:max-w-[503px] md:h-[574px]">
                <Image src="/images/image_11.jpg" alt="" width={503} height={574} className="w-full object-cover" quality={100}/>
            </div>
        </div>
        <div className="px-4 lg:px-[calc(32px)] flex flex-wrap justify-between lg:grid lg:grid-cols-5 gap-8 bg-white py-5">
            {Object.values(data.pictos).map((item,index) =>
            <div key={index} className="flex flex-col items-center text-center lg:col-span-1 w-40 lg:w-50 gap-1">
                <svg width="58px" height="58px">
                    <use xlinkHref={Experienced[index]}></use>
                </svg>
                <h3 className="text-lg font-medium text-secondsry px-3">{item.title}</h3>
                <p>{item.description}</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default index
