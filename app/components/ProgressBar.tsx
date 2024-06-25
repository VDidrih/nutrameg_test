import React from "react";

type Props = { progress: number };

function ProgressBar({ progress }: Props) {
  return (
    <div className="w-full bg-white rounded-full h-3">
      <div
        className="bg-[#E5BF94] h-3 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
