"use client";
import React from 'react';
import {CustomButtonProps} from "@/types";

const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >

    </button>
  );
};

export default CustomButton;
// by Rokas with ❤️
