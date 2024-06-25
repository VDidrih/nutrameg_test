"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Checkbox from "../components/Checkbox";
import ProgressBar from "../components/ProgressBar";
import MobileHeader from "./MobileHeader";
import { title } from "process";

type Props = {};

interface CheckboxItem {
  id: number;
  label: string;
  checked: boolean;
}

const Survey = ({}: Props) => {
  const questions = 12;
  const index = 1;
  const title = "Why do you want to lose weight?";

  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    { id: 1, label: "Improve how I look", checked: true },
    { id: 2, label: "Become healthier", checked: true },
    { id: 3, label: "Feel better", checked: false },
    { id: 4, label: "Boost my energy", checked: false },
    { id: 5, label: "Other", checked: false },
  ]);

  const handleCheckboxChange = (id: number) => {
    setCheckboxes((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };
  return (
    <div className="h-screen w-screen bg-[#E2E9E5] flex justify-center items-start md:items-center relative">
      <Image
        className="hidden sm:block absolute top-4 left-16"
        src={logo}
        alt="ALOGO"
        width={114}
        height={56}
      />
      <div className="my-auto h-screen flex flex-col justify-center items-center gap-5 max-w-sm">
        <MobileHeader />
        <ProgressBar progress={(index / questions) * 100} />
        <h1 className="text-xl text-[#444134]">{title}</h1>
        <div className="flex flex-col w-full h-2/3 gap-2">
          {checkboxes.map((checkbox) => (
            <Checkbox
              key={checkbox.id}
              id={`checkbox-${checkbox.id}`}
              label={checkbox.label}
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
          ))}
        </div>
        <button
          tabIndex={0}
          className={`self-end mb-6 text-[#444134] text-sm w-full text-center whitespace-nowrap bg-[#BAD5C8] hover:bg-[#a7bfb4] focus:bg-[#7b9f8e]
                shadow-md hover:shadow-none font-bold py-[18px] px-[16px] rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Survey;
