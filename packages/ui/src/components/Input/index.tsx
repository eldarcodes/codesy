import React from "react";
import MyInput from "./Input.styled";

export interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder, ...props }: InputProps) => {
  return <MyInput placeholder={placeholder} {...props} />;
};
