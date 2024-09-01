"use client";
import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import Image from 'next/image';
import noodleImage from '@/assets/noodle.png'
import { motion ,useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';
export const Hero = () => {
  const heroRef=useRef(null);
  const {scrollYProgress}=useScroll({
    target:heroRef,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])
  return(
    <div ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag">Version 2.0 is here</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Pathway to productivity</h1>
          <p className="text-xl tracking-tight text-[#010D3E] mt-6">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1"><span>Learn more</span><ArrowRight className="h-5 w-5"/></button>
          </div>
         
        </div>
    
      <div className='mt-20 md:mt-0 h-[648px] flex-1 relative' >
        <motion.img src={cogImage.src} alt="cog image" className='md:absolute h-full w-auto md:max-w-none md:-left-6 lg:left-0 sm:w-max-[400px]'
         animate={{translateY:[-30,30]}} 
        transition={{repeat:Infinity,repeatType:'mirror',duration:'3',ease:"easeInOut"}}
        />
        <motion.img src={cylinderImage.src} alt="Cylinder image" width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute'
        style={{translateY:translateY,}}
        />
        <motion.img src={noodleImage.src} alt="noodle Image" width={220} className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' style={{translateY:translateY,}}/>

{/* <Image src={cylinderImage} alt="Cylinder image" width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute'
        />
        <Image src={noodleImage} alt="noodle Image" width={220} className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' /> */}
      </div>
      </div>
        </div>
       
    </div>
  );
};
