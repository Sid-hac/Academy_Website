import React from "react";
import Image from "next/image";

import logo from "../images/logo.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" w-full">
      <div className="flex gap-3 flex-col bg-navbg text-white w-full p-4 sm:p-10">
        <div className="flex flex-row ">
          <Image src={logo} alt="logo3" width={60} height={60} />
          <p className="text-shadeYellow text-3xl font-bold">
            IAS<span className="text-white text-lg font-bold ml-2">Sathi</span>
          </p>
        </div>
        <div className="max-w-[300px] sm:max-w-[400px]">
          At IAS Sathi, we turn UPSC preparation into a thrilling game with
          personalized quizzes and an AI chatbot-your dynamic duo for success!{" "}
        </div>
        <div className="font-normal ">
          Follow us on
          <ul className="flex flex-row gap-3 text-xl mt-4 cursor-pointer">
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <RiTwitterXLine />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <span aria-hidden='true' className="w-full h-2 bg-shadeYellow rounded-full"/>
        <div className="flex flex-col sm:flex-row  justify-between gap-3">
          <div>
            &#169; 2024 <span className="text-shadeYellow">IAS</span> Sathi
          </div>
          <div className="flex flex-col sm:flex-row list-none gap-3 sm:gap-5 justify-end">
            <li>
              <a href="privacy_policy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms_and_conditions.html">Terms and Conditions</a>
            </li>
            <li>
              <a href="mailto:Info@iassathi.com">
                Contact us: Info@iassathi.com
              </a>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
