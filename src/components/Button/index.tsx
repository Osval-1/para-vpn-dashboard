import React from "react";

type ButtonProps = {
  label: string;
  onclick: () => void;
};

const Button = ({ label, onclick }: ButtonProps) => {
  return (
    <button
      className="border border-text-blue w-32 h-8 text-text-blue rounded-xl font-medium font-inter text-sm"
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default Button;
