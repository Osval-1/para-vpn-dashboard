import React from "react";
import { server } from "../../assets";

type InputProps = {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, label, value, type, onchange }: InputProps) => {
  return (
    <label
      htmlFor={placeholder}
      className="flex flex-col gap-2 font-inter font-normal w-full"
    >
      {label}
      <input
        type={type}
        placeholder={placeholder}
        style={type === "file" ? { display: "none" } : undefined}
        id={placeholder}
        className="border h-9 md:h-12 w-2/3 rounded-2xl pl-5 placeholder:text-text-body text-sm"
        value={type === "file" ? "" : value}
        onChange={onchange}
      />
      {type === "file" && (
        <img
          src={value ? value : server}
          alt="server image"
          className={`w-[132px] h-[130px] rounded-full resize bg-background-input p-4`}
        />
      )}
    </label>
  );
};

export default Input;
