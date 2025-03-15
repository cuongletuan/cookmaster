"use client"
import { Bloc2_2 } from '@/type/_pages'
import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { SelectedDateDefault } from '@/const';

const Index = ({data}:{data:Bloc2_2}) => {
  const [selectedDays, setSelectedDays] = useState<Date[] | undefined>(SelectedDateDefault);
  return (
    <div className="w-screen" data-aos="fade-up">
       <div className="container mx-auto my-16 px-4 lg:px-[calc(32px)]">
        <div className="py-10">
            <div className="relative border-[1px] border-[#BBB]">
                <div className="absolute z-8 -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit whitespace-nowrap px-10 bg-white h-[60px]">
                    <h2 className="text-center text-primary text-[24px] md:text-[32px] lg:text-[40px] 3xl:text-[52px] font-semibold uppercase">{data.title}</h2>
                </div>
            </div>
        </div>
        <Calendar
          mode="multiple"
          selected={selectedDays}
          onSelect={setSelectedDays}
          className="rounded-3xl border border-[rgba(86,44,44,0.3)] shadow lg:p-8 mt-5"
        />
       </div>
    </div>
  )
}

export default Index
