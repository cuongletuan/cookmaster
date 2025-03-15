import React from 'react'
import { Button } from '@/components/ui/button'
import { Bloc6 } from '@/type/_pages'

const index = ({data}:{data:Bloc6}) => {
  return (
    <div className="w-screen lg:min-h-[666px] bg-[url('/images/image_4.png')] bg-cover bg-no-repeat flex items-center md:items-start justify-center" data-aos="fade-up">
      <div className="py-8 lg:py-[30px] text-center">
      <h2 className="text-secondary text-[24px] md:text-[32px] lg:text-[52px] font-semibold">{data.title}</h2>
        <h2 className="text-[rgba(86,44,44,0.50)] text-[24px] md:text-[32px] lg:text-[53px] font-semibold leading-6">{data.subtitle}</h2>
        <p className="mb-10 mt-6 text-secondary text-sm md:text-[16px] lg:text-[24px] max-w-2xl">{data.text}</p>
        <Button className="bg-primary hover:bg-primary-dark transition-all rounded-3xl px-6 py-5 text-[18px]">{data.button}</Button>
      </div>
    </div>
  )
}

export default index
