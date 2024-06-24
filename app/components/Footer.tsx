import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import arrowRight from "../../public/svg/arrow-right.svg";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="flex flex-col text-[14px] justify-center gap-6 w-full h-fit bg-[#EDEAE2] text-[#404040] py-14 md:py-18 px-10 md:px-[150px]">
      <Image src={logo} alt="ALOGO" width={80} />
      <p>
        The service is provided by certified nutrition experts and trainers.
      </p>
      <div>
        <h1 className="my-2 font-semibold">Chat with us</h1>
        <p>
          Our certified Nutritionist team is available through your account chat
          section. We are here for you 24/7.
        </p>
      </div>
      <div>
        <h1 className="my-2 font-semibold">Get help</h1>
        <p>
          Want to learn more about how to regain youth, want to manage your
          subscription, or you had questions and couldn’t find answers? Just
          click on
          <a href="#" className="ml-1 underline cursor-pointer">
            SUPPORT
          </a>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-row items-baseline">
          <div>TERMS OF SERVICE and POLICIES</div>
          <Image className="ml-2" src={arrowRight} alt="arrow-right" width={7} />
        </div>
        <div className="flex flex-row items-baseline">
          <div>TERMS OF SUBSCRIPTION SERVICES</div>
          <Image className="ml-2" src={arrowRight} alt="arrow-right" width={7} />
        </div>
      </div>
      <p>
        The results differ from person to person. This site is not a part of the
        Facebook website of Facebook Inc. Additionally this site is NOT endorsed
        by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc
      </p>
    </footer>
  );
};

export default Footer;
