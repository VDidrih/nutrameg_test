import React from "react";

type Props = {};

const Disclaimer = ({}: Props) => {
  return (
    <div className="disclaimer text-[14px] text-[#404040] gap-5 py-12 md:py-14 px-10 md:px-[150px] h-fit flex flex-col justify-around bg-[#F8F6F1] overflow-none">
      <p aria-label="Disclaimer">
        *DISCLAIMER: The outcomes you achieve may differ based on factors such
        as your initial condition, objectives, dedication, and the accuracy of
        the information presented in this form. Typical users of YouthGenom can
        experience a weight loss of up to 4lbs in the initial week.
      </p>
      <p>
        The content provided on this website should not be considered medical
        advice. It is your responsibility to prioritize your health and safety
        at all times. For any inquiries, please consult a medical professional.
      </p>
    </div>
  );
};

export default Disclaimer;
