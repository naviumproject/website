'use client';
import { use,useEffect, useState  } from "react";
import { PropsWithChildren } from "react"
import Image from "next/image"
import Logo from "./logo"
import DownloadButton from "./downloadbutton"
import { motion, useScroll,useTransform } from "framer-motion"

export default function Hero(){
    const { scrollYProgress } = useScroll();
    const [ loading, setLoading ] = useState(true)
    const [ latest, setLatest ] = useState("")
    useEffect(() => {
        getLatestVersion()
          .then((data) => {
                        setLatest(data.trim())
            setLoading(false)
          })
                    .catch(() => {
                        setLatest("")
                        setLoading(false)
                    })
      }, [])
     
    return (
        <>
        <motion.div className="select-none relative w-[100dvw] lg:w-full h-full clipper items-center justify-center z-10 flex-col gap-8 flex px-8 from-[#d48e64] to-transparent dark:from-[#833d58] dark:to-transparent bg-gradient-to-b"
    
            initial={{opacity:0, translateY:0}}
            animate={{opacity:1, translateY:0, transition:{duration:0.75}}}
        >
        <motion.img
        initial={{opacity:0, translateY:-300}}
        animate={{opacity:1, translateY:0, transition:{duration:0.75,delay:0.75,}}}
        style={{translateY: useTransform(scrollYProgress, l => l*-500),rotateZ:useTransform(scrollYProgress, l => l*-16+6)}} src="/hero/main.png" 
        className="absolute overflow-x-clip sepia saturate-200 -z-10 brightness-50 dark:hue-rotate-[100deg] right-[70%] blur-sm"></motion.img>
        <motion.img
        initial={{opacity:0, translateY:-300}}
        animate={{opacity:1, translateY:0, transition:{duration:0.75,delay:1.35,}}}
        style={{translateY: useTransform(scrollYProgress, l => l*-400),rotateZ:useTransform(scrollYProgress, l => l*7-5)}} src="/hero/twitter.png" 
        className="absolute overflow-x-clip sepia saturate-200 top-0 -z-10 brightness-50 dark:hue-rotate-[100deg] left-[70%] blur-sm"></motion.img>
        <motion.img
        initial={{opacity:0, translateY:-300}}
        animate={{opacity:1, translateY:0, transition:{duration:0.75,delay:1.8,}}}
        style={{translateY: useTransform(scrollYProgress, l => l*-300),rotateZ:useTransform(scrollYProgress, l => l*-8+4)}} src="/hero/monochromaticimage.png" 
        className="absolute overflow-x-clip sepia saturate-200 bottom-[-12%] left-[50%] -translate-x-1/2 -z-10 brightness-50 dark:hue-rotate-[100deg] blur-sm w-[min(78vw,1000px)] rounded-[2rem] opacity-80"></motion.img>

            <motion.div className="items-center justify-center flex-col gap-8 flex"
                        initial={{opacity:0, translateY:100}}
                        animate={{opacity:1, translateY:0, transition:{duration:0.5,delay:0.5}}}
            >
                <h1 className="flex-col lg:flex-row flex items-center justify-center gap-4 text-3xl md:text-4xl lg:text-[4rem] 2xl:text-[7rem] font-extrabold font-display">
                    <Logo></Logo>
                </h1>
                <h2 className=" mix-blend-difference dark:mix-blend-exclusion  text-light-secondary dark:text-light-accent text-base md:text-3xl 2xl:text-4xl text-center">
                    Teh pretty cool actually serious ungoogled-chromium-based browser that probably <span>gives a sdjasiod</span>.
                </h2>
                <div className="flex gap-4 flex-col w-full flex-shrink items-center justify-center">

                <DownloadButton downloadText="Download for Windows 10/11 (soon)" downloadLink={latest ? "https://github.com/naviumproject/navium/releases" + latest : "https://github.com/naviumproject/navium/releases"}></DownloadButton>
                <DownloadButton compact downloadText="download for other platforms (soon)" downloadLink="https://github.com/naviumproject/navium#otherplatforms"></DownloadButton>
                </div>
            </motion.div>

        </motion.div>
        </>
    )
}
async function getLatestVersion() {
    const response = await fetch(`https://github.com/naviumproject/navium/releases/latest`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error(`Version request failed: ${response.status}`);
    }

    return response.text();

  }