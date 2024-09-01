"use client";
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseImage from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import {motion} from 'framer-motion';
export const LogoTicker = () => {
  return <div className='py-8 md:py-12 bg-white'>
<div className='container'>
 <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
 <motion.div className='flex gap-14 flex-none pr-14' animate={{translateX:"-50%"}} transition={{repeat:Infinity,repeatType:'loop',duration:20,ease:"linear"}}>
  <Image src={acmeLogo} alt="Acme Logo"/>
  <Image src={quantumLogo} alt="Quantum Logo"/>
  <Image src={echoLogo} alt="Echo Logo"/>
  <Image src={celestialLogo} alt="Celestial Logo"/>
  <Image src={pulseImage} alt="Pulse Image"/>
  <Image src={apexLogo} alt="Apex Logo"/>

  {/* second set */}
  <Image src={acmeLogo} alt="Acme Logo"/>
  <Image src={quantumLogo} alt="Quantum Logo"/>
  <Image src={echoLogo} alt="Echo Logo"/>
  <Image src={celestialLogo} alt="Celestial Logo"/>
  <Image src={pulseImage} alt="Pulse Image"/>
  <Image src={apexLogo} alt="Apex Logo"/>

 </motion.div>
 </div>

</div>
  </div>;
};
