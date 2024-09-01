"use client";
import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import { useRef } from "react";
import {motion,useScroll,useTransform} from 'framer-motion'
export const CallToAction = () => {
  const actionRef=useRef(null);
  const{scrollYProgress}=useScroll({
    target:actionRef,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[-150,150])
  return(
    <section ref={actionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts</p>
        <motion.img src={starImage.src} alt="star image" width={360} className='hidden md:block absolute -left-[350px] -top-[137px] ' style={{translateY}}/>
        <motion.img src={springImage.src} alt="spring image" width={360} className='hidden md:block absolute -right-[331px] -top-[19px] ' style={{translateY}}/>
     

        </div>
       
        <div className="mt-10 flex gap-2 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-primary"><span>Learn more</span><ArrowRight className="h-5 w-5 gap-1"/></button>
        </div>
        </div>
    </section>
  );
};
