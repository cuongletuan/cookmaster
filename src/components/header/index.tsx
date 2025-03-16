"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)

const Index = ({head_menu=[]}:{head_menu?:string[]}) => {

    const [showSideBar, setShowSideBar] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = new URLSearchParams(useSearchParams().toString());

    const updateQuery = (key: string, value: string) => {
        searchParams.set(key, value); 
        router.push(`${pathname}?${searchParams.toString()}`);
    };

    useGSAP(() => {
        gsap.fromTo(
          ".link-menu",
          { 
            visibility: "visible",
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            delay: 0.5,
            stagger: (index) => 0.25 * index,
          }
        );
    }, []);
    useEffect(() => {
        const icons = document.querySelectorAll(".icon");
    
        icons.forEach((icon) => {
          icon.addEventListener("mouseenter", () => {
            gsap.to(icon, {
              rotation: 10,
              repeat: 3,
              yoyo: true,
              duration: 0.1,
              ease: "power1.inOut",
            });
          });
    
          icon.addEventListener("mouseleave", () => {
            gsap.killTweensOf(icon);
            gsap.to(icon, { rotation: 0, duration: 0.2 });
          });
        });
    
        return () => {
          icons.forEach((icon) => {
            icon.removeEventListener("mouseenter", () => {});
            icon.removeEventListener("mouseleave", () => {});
          });
        };
      }, []);
      const openSideBar = () =>{
        setShowSideBar(!showSideBar)
      };
      const closeSideBar = () =>{
        setShowSideBar(false)
      };
  return (
    <header className="fixed flex z-10 w-full bg-gradient-to-r from-[rgba(86,44,44,0.7)] to-[rgba(86,44,44,0.7)] h-[72px]" data-aos="fade">
        <div className="container m-auto px-4 xl:px-[calc(32px)]">
            <div className="flex justify-between items-center">
                <div className="flex text-white md:gap-10 xl:gap-16">
                    <h2 className="font-medium"><Link href="/">LOGO SAMPLE</Link></h2>
                    <ul className="hidden lg:flex m-0 md:gap-10 xl:gap-16 justify-between">
                        {head_menu.map(menu => <li key={menu}><Link href="" className="hover:text-primary md:text-[13px] xl:text-[16px] link-menu">{menu}</Link></li>)}
                    </ul>
                </div>
                <div className="hidden lg:flex justify-between items-center gap-2">
                    <div className="flex gap-2 items-center">
                        <Link href="">
                            <svg width="28" height="28" className="fill-current text-[#F0F0F0] hover:text-primary link-menu icon">
                                <use xlinkHref="/images/icons.svg#icon-image"></use>
                            </svg>
                        </Link>    
                        <Link href="">
                            <svg width="28px" height="28px" className="fill-current text-[#F0F0F0] hover:text-primary link-menu icon">
                                <use xlinkHref="/images/icons.svg#icon-fish"></use>
                            </svg>
                        </Link>    
                        <Link href="">
                            <svg width="28px" height="28px" className="fill-current text-[#F0F0F0] hover:text-primary link-menu icon">
                                <use xlinkHref="/images/icons.svg#icon-position"></use>
                            </svg>
                        </Link>    
                    </div>
                    <Button className="rounded-3xl py-4 px-5 bg-primary hover:color-primary-dark border-1 border-primary hover:color-primary-dark cursor-pointer link-menu">
                        <svg width="14px" height="14px">
                            <use xlinkHref="/images/icons.svg#icon-arrow"></use>
                        </svg>
                    </Button>
                    <select onChange={(e)=>updateQuery('lang',e.target.value)} className="text-primary cursor-pointer bg-white rounded-2xl py-1 px-2 border-0 focus:outline-0 link-menu">
                        <option value={'en'}>EN</option>
                        <option value={'fr'}>FR</option>
                    </select>
                </div>
                <div className="block lg:hidden">
                    <svg width="24px" height="24px" onClick={openSideBar}>
                        <use xlinkHref="/images/icons.svg#icon-bars"></use>
                    </svg>
                </div>
            </div>
            {
          showSideBar && (
            <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-[rgba(86,44,44,1)] to-[rgba(86,44,44,1)] p-8">
              <div className="flex justify-between items-center mb-5">
                <Link href="/" className="text-[20px]">LOGO SAMPLE</Link>
                <svg width="14" height="14" className="lg:hidden" onClick={closeSideBar}>
                  <use xlinkHref="../images/icons.svg#icon-close"></use>
                </svg>
              </div>
              <ul>
                {head_menu.map(menu => <li key={menu}><Link href="" className="hover:text-primary text-[20px] link-menu py-5 block border-b border-white text-white">{menu}</Link></li>)}
              </ul>
              <div className="flex justify-start items-center gap-2 mt-5">
                    <div className="flex gap-2 items-center">
                        <Link href="">
                            <svg width="28" height="28" className="fill-current text-primary hover:text-primary-dark link-menu icon">
                                <use xlinkHref="/images/icons.svg#icon-image"></use>
                            </svg>
                        </Link>    
                        <Link href="">
                            <svg width="28px" height="28px" className="fill-current text-primary hover:text-primary-dark link-menu icon">
                                <use xlinkHref="/images/icons.svg#icon-fish"></use>
                            </svg>
                        </Link>    
                        <Link href="">
                            <svg width="28px" height="28px" className="fill-current text-primary hover:text-primary-dark link-menu icon">
                                <use xlinkHref="/images/icons.svg#icon-position"></use>
                            </svg>
                        </Link>    
                    </div>
                    <Button className="rounded-3xl py-4 px-5 bg-primary hover:color-primary-dark border-1 border-primary hover:color-primary-dark cursor-pointer link-menu">
                        <svg width="14px" height="14px">
                            <use xlinkHref="/images/icons.svg#icon-arrow"></use>
                        </svg>
                    </Button>
                    <select onChange={(e)=>updateQuery('lang',e.target.value)} className="text-primary cursor-pointer bg-white rounded-2xl py-1 px-2 border-0 focus:outline-0 link-menu">
                        <option value={'en'}>EN</option>
                        <option value={'fr'}>FR</option>
                    </select>
                </div>
            </div>
          )
        }
        </div>
    </header>
  )
}

export default Index
