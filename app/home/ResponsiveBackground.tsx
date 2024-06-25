import React from "react";
import Image from "next/image";
import web_BG from "../../public/images/web_background.png";
import smiling_lady from "../../public/images/web_smiling_lady.png";

type Props = {};

const ResponsiveBackground = ({}: Props) => {
  return (
    <div className="relative">
      <div className="flex justify-center items-end w-full md:h-screen">
        <div className="absalute inset-0">
          <Image
            src={web_BG}
            alt="main background"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 flex max-w-[600px] justify-end items-end">
          <Image
            src={smiling_lady}
            alt="smiley lady"
            width={1}
            height={1}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBackground;
