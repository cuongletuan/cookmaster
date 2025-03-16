"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Articles from "@/components/articles";
import Footer from "@/components/footer";
import Discovery from "@/components/discovery";
import Share from "@/components/share";
import Experiences from "@/components/experiences";
import Explore from "@/components/explore";
import Map from "@/components/map";
import Form from "@/components/form";
import Calendar from "@/components/calendar";
import { useQuery } from "@tanstack/react-query";
import { getPages } from "@/utils/_pages";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { dumpmy } from "@/const";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const { data } = useQuery({
    queryKey: ["pages", lang],
    queryFn: async () => {
      return await getPages(lang);
    },
  });
  const block = useMemo(() => data || dumpmy, [data]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Header head_menu={block[0].head_menu} />
      <main className="overflow-hidden">
        <Banner banner_menu={block[0].banner_menu} />
        <Articles data={block[0].bloc_1} />
        <Map data={block[0].bloc_2} points={block[0].carte_point} />
        <Calendar data={block[0].bloc_2_2} />
        <Form data={block[0].bloc_2_2} />
        <Explore data={block[0].bloc_3} />
        <Experiences data={block[0].bloc_4} />
        <Share data={block[0].bloc_5} />
        <Discovery data={block[0].bloc_6} />
      </main>
      <Footer data={block[0].footer} />
    </>
  );
}
