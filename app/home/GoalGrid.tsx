import React from "react";

type Props = {
  goals: string[];
};

const GoalGrid = ({ goals }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-10 p-10 md:pl-[150px] sm:p-none mb-10 w-fit md:w-1/2 h-screen">
      <h1 className="font-youngSerif text-3xl md:text-4xl">
        Uncover weight loss methods for all menopause stages
      </h1>
      <div className="flex flex-col min-w-[300px] w-full">
        <h2 className="my-3">What is your desired weight loss goal?</h2>
        <div className="grid grid-cols-2 gap-3">
          {goals.map((goal, index) => {
            const isLastAndOdd =
              goals.length === index + 1 && goals.length % 2 !== 0;
            return (
              <button
                className={`text-[#444134] text-sm min-w-[200px]text-center whitespace-nowrap bg-[#BAD5C8] hover:bg-[#a7bfb4] focus:bg-[#7b9f8e]
                shadow-md hover:shadow-none font-bold py-[18px] px-[16px] rounded
                ${isLastAndOdd ? "col-span-2" : ""} `}
                key={index}
              >
                <h1 className="text-[#444134]">{goal}</h1>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GoalGrid;
