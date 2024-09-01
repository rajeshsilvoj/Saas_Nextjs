"use client";
import Image from "next/image";
import logo from '@/assets/logosaas.png'
import SocialX from '@/assets/social-x.svg';
import SocialI from '@/assets/social-insta.svg';
import SocialL from '@/assets/social-linkedin.svg';
import SocialP from '@/assets/social-pin.svg';
import SocialY from '@/assets/social-youtube.svg';


export const Footer = () => {

  return(
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex justify-center">
      <Image src={logo} height={40} alt="logo" />
      </div>
      <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customers</a>
        <a href="#">Pricing</a>
        <a href="#">Help</a>
        <a href="#">Careers</a>
      </nav>
    <div className="flex justify-center gap-6 mt-6 ">
      <SocialX/>
      <SocialP/>
      <SocialI/>
      <SocialY/>
      <SocialL/>

    </div>
    <p className="mt-6">&copy; 2024 NetBuzz, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};
