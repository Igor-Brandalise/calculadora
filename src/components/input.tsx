import React from "react";

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}


const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="string"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="no-spinner border-2 border-black p-2 rounded w-40 "
    />
  );
};

export default Input;
