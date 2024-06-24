import React from "react";
import Image from "next/image";
import avatar from "../../public/svg/avatar.svg";
import logo from "../../public/images/logo.png";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="absolute top-0 w-full z-10 ">
      <div className="flex justify-between items-center w-full p-10 md:px-[150px]">
        <Image src={logo} alt="ALOGO" width={114} height={56} />
        <Image src={avatar} alt="avatar" width={24} height={24} />
      </div>
    </nav>
  );
};

export default Navbar;
