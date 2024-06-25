import React from "react";
import Image from "next/image";
import arrowLeft from "../../public/svg/arrow-left.svg";
import logo from "../../public/images/logo.png";
import Link from "next/link";

type Props = {};

const MobileHeader = ({}: Props) => {
  return (
    <div className="mt-6 w-full h-fit flex flex-row justify-between items-center">
      <Link href={"/"}>
        <Image src={arrowLeft} alt="arrow-right" width={24} />
      </Link>
      <Link href={"/"}>
        <Image
          className="sm:hidden"
          src={logo}
          alt="ALOGO"
          width={114}
          height={56}
        />
      </Link>
    </div>
  );
};

export default MobileHeader;
