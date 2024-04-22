import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import SideHeader from "@/components/SideHeader/SideHeader";
import { Preloader } from "@/components/smallComponents/Preloader";
import { useCallback, useEffect, useState } from "react";
import  CodeBy  from "@/components/CodeBy"
export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    const threshold = 650
    if (scrollY > threshold) {
      setIsVisible(false);
    }
    else if (scrollY < threshold) {
      setIsVisible(true);
    }
    console.log("scrollY", scrollY);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
    window.addEventListener("scroll", onScroll, { passive: true });
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="main relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className={((!isVisible) || (width<550))?"showOut1":"hideOut1"}><SideHeader /></div>
      <AnimatePresence mode="wait">
        <div className="z-20 absolute w-full"><CodeBy coder={"Ansuman Nayak"} to="/" /></div>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
