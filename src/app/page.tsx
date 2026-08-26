"use client";
import Image from "next/image";
import Hero from "./hero";
import { /* funny feat icons */ CpuChipIcon, WindowIcon, EyeSlashIcon, UserCircleIcon, StopCircleIcon, ClockIcon,
         /* actual feat icons */  CodeBracketIcon, SwatchIcon, QuestionMarkCircleIcon, ChatBubbleOvalLeftIcon, CloudArrowUpIcon, DocumentIcon
 } from "@heroicons/react/24/outline";
 
import ThemeSwitcher from "./themechanger";
import { motion, stagger, useScroll  } from "framer-motion";
import { PropsWithChildren } from "react";
import Quote from "./quote";

export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Hero></Hero>
      <motion.div className="px-8 2xl:px-24"
      animate={{}}
      transition={{duration:0.75, staggerChildren: 1.5}}
      viewport={{ once: true }}
      >
        <AnimatedSection>
          <h2>A Browser that doesn&apos;t care</h2>
          <span>
            at navium, we do probably care how you use your browser. and
            do we care about anything in this browser. We&apos;re adding whatever the FUH we want to teh browser and no one can stop it.
            <h3 className="mt-4">
              How did this start?
            </h3>
            <span>
              It started when i wanted it to freaking start. so i basically wanted to make my very own browser with actual (un)funny jokes and yeah-
              <br />
              I am basically proving that i can make a browser with my own jokes and features. and i did it. and now you can use it too.
            </span>
          </span>
        </AnimatedSection>
        <AnimatedSection>
          <h1>&quot;Features&quot;</h1>
          <h1>Actual Features</h1>
          <AnimatedDivision className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            <FeatureList
              icon={<CodeBracketIcon width={96}></CodeBracketIcon>}
              featureName="Funny Strings"
              featureDesc={<>We&apos;re changing quite a few strings so it becomes a little funnier. Includes latest 21<sup>st</sup> century humours, privacy scandals, and more!</>}
            ></FeatureList>
            <FeatureList
              icon={<SwatchIcon width={96}></SwatchIcon>}
              featureName="3 New Colors"
              featureDesc={<>Featuring <b>t r a s h</b>, <b>Piss off</b>, and <b>Who tf farted?</b> These colors are just Pissandshittium&apos;s and i have nothing to do about it.</>}
            ></FeatureList>
            <FeatureList
              icon={<QuestionMarkCircleIcon width={96}></QuestionMarkCircleIcon>}
              featureName="Google API?"
              featureDesc={<>luna.</>}
            ></FeatureList>
            <FeatureList
              icon={<ChatBubbleOvalLeftIcon width={96}></ChatBubbleOvalLeftIcon>}
              featureName="Easter Eggs"
              featureDesc={<>Hidden beneath the app are some easter eggs and reference to whatever I want to add. Expect a harmless surprise coming your way!</>}
            ></FeatureList>
            <FeatureList
              icon={<CloudArrowUpIcon width={96}></CloudArrowUpIcon>}
              featureName="Open Source"
              featureDesc={<>We believe in open source software. So we&apos;re making changes visible to the public eye just like regular Chromium. If you don&apos;t believe in builds provided. Feel very free to compile it yourself.</>}
            ></FeatureList>
            <FeatureList
              icon={<DocumentIcon width={96}></DocumentIcon>}
              featureName="I don't know what I'm doing"
              featureDesc={<>honestly, i dont know what im doing while compiling this and i cant even compile it tho so whatever.</>}
            ></FeatureList>
          </AnimatedDivision>
        </AnimatedSection>
        
        <AnimatedSection>
          <h1>Screen&shy;shots</h1>
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden relative flex-shrink-0 items-start flex-grow-0 md:max-h-[52dvh] rounded-xl object-contain">
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/a/pastsc1.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/v/pastsc1.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/a/pastsc2.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/v/pastsc2.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/a/pastsc3.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          <motion.img variants={variants} initial={'initX'} transition={{duration:0.25}} whileInView={'enterX'} viewport={{ once: true }} src="/screenshots/v/pastsc3.png" alt="" className="md:max-h-[50dvh] w-auto"></motion.img>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <h1>Testimonials (spoiler: John Doe)</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center">
              <Quote author="John Doe">
                I love this browser! It has a lot of features and is very fast. I would recommend it to anyone.
              </Quote>
            </div>
          </div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}

const variants = {
    
    initX:{opacity:0, x:100},
    enterX:{opacity:1, x:0},
    initY:{opacity:0, y:100},
    enterY:{opacity:1, y:0},
    initO:{opacity:0},
    enterO:{opacity:1},
}
function FeatureList({icon,featureName,featureDesc}:{icon:any,featureName:any,featureDesc:any}) {
  return (
    <motion.div className="flex items-center gap-2 flex-col"
    variants={variants}
    initial={'init0'}
    whileInView={'enter0'}
    viewport={{ once: true }}
    >
        {icon}
      <h2 className="text-center">{featureName}</h2>
      <span>{featureDesc}</span>
    </motion.div>
  );
}

function AnimatedSection({children}:PropsWithChildren<any>){
  
  return (<motion.section
    variants={variants}
    initial={'initO'}
    whileInView={'enterO'}
  transition={{duration:0.5}}
  viewport={{ once: true }}
  className="mt-12"
  >
    {children}
  </motion.section>)
}
function AnimatedDivision({children}:PropsWithChildren<any>){
  
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4"
    variants={variants}
    transition={{duration:0.95,staggerChildren:0.35}}
    viewport={{ once: true }}
    >
      {children}
    </motion.div>)
}
