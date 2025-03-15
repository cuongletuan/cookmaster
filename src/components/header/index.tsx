"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Index = ({head_menu=[]}:{head_menu?:string[]}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = new URLSearchParams(useSearchParams().toString());

    const updateQuery = (key: string, value: string) => {
        searchParams.set(key, value); 
        router.push(`${pathname}?${searchParams.toString()}`);
    };
  return (
    <header className="fixed flex z-10 w-full bg-gradient-to-r from-[rgba(86,44,44,0.7)] to-[rgba(86,44,44,0.7)] h-[72px]">
        <div className="container m-auto px-4 xl:px-[calc(32px)]">
            <div className="flex justify-between items-center">
                <div className="flex text-white md:gap-10 xl:gap-16">
                    <h2 className="font-medium"><Link href="/">LOGO SAMPLE</Link></h2>
                    <ul className="hidden lg:flex m-0 md:gap-10 xl:gap-16 justify-between">
                        {head_menu.map(menu => <li key={menu}><Link href="" className="hover:text-primary md:text-[13px] xl:text-[16px]">{menu}</Link></li>)}
                    </ul>
                </div>
                <div className="hidden lg:flex justify-between items-center gap-2">
                    <div className="flex gap-2 items-center">
                        <Link href="">
                            <svg width="28" height="28" className="fill-current text-[#F0F0F0] hover:text-primary">
                                <use xlinkHref="/images/icons.svg#icon-image"></use>
                            </svg>
                        </Link>    
                        <Link href="">
                            <svg width="28px" height="28px" className="fill-current text-[#F0F0F0] hover:text-primary">
                                <use xlinkHref="/images/icons.svg#icon-fish"></use>
                            </svg>
                        </Link>    
                        <Link href="">
                            <svg width="28px" height="28px" className="fill-current text-[#F0F0F0] hover:text-primary">
                                <use xlinkHref="/images/icons.svg#icon-position"></use>
                            </svg>
                        </Link>    
                    </div>
                    <Button className="rounded-3xl py-4 px-5 bg-primary hover:color-primary-dark border-1 border-primary hover:color-primary-dark cursor-pointer">
                        <svg width="14px" height="14px">
                            <use xlinkHref="/images/icons.svg#icon-arrow"></use>
                        </svg>
                    </Button>
                    <select onChange={(e)=>updateQuery('lang',e.target.value)} className="text-primary cursor-pointer bg-white rounded-2xl py-1 px-2 border-0 focus:outline-0">
                        <option value={'en'}>EN</option>
                        <option value={'fr'}>FR</option>
                    </select>
                </div>
                <div className="block lg:hidden">
                    <svg width="24px" height="24px">
                        <use xlinkHref="/images/icons.svg#icon-bars"></use>
                    </svg>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Index
