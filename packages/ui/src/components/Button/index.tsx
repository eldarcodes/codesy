import React from "react";
import MyButton from "./Button.styled";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <MyButton type="button" {...props}>
      {label} (my)
    </MyButton>
  );
};
