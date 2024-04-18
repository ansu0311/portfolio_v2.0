import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from 'framer-motion'
import SideHeader from "@/components/SideHeader/SideHeader";
import { Preloader } from "@/components/smallComponents/Preloader";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
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
  }, []);
  return(
    <div className='main'>
      <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
         <SideHeader/>
        <AnimatePresence mode='wait'>
            <Component key={router.route} {...pageProps} />
        </AnimatePresence>
    </div>
)
}
