"use client";
import Image from "next/image";
import Hero from "./hero";
import { motion, stagger, useScroll  } from "framer-motion";
import { PropsWithChildren } from "react";

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
          <h2>A Browser that cares xd</h2>
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
