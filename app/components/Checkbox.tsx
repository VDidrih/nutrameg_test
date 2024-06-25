import React from "react";

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ id, label, checked, onChange }: Props) => {
  return (
    <div
      onClick={onChange}
      className={`flex items-center p-4 mb-2 border rounded-md cursor-pointer ${
        checked ? "bg-[#F8F6F1] border-transparent" : "bg-white border-gray-300"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 text-[#c4b998] border-gray-300 rounded ring-[#E5BF94] focus:ring-[#c4b998] accent-[#E5BF94] focus:ring-2 mr-3"
      />
      <label htmlFor={id} className="text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
