"use client";
import React from "react";
import Link from "next/link";
import Loading from "./loading";
interface props {
  variant?:
    | "primary"
    | "danger"
    | "success"
    | "outlined"
    | "normal"
    | "light"
    | "subtle";
  size?: "sm" | "md" | "lg";
  loading?: Boolean;
  href?: string;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  compact?: Boolean;
  uppercase?: Boolean;
  disabled?: Boolean;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: JSX.Element | JSX.Element[] | String;
}
export default function Button({
  variant = "primary",
  size = "md",
  loading,
  rounded = "sm",
  href,
  children,
  onClick,
  compact,
  uppercase = false,
  disabled = false,
  LeftIcon,
  RightIcon,
}: props) {
  const Element = href ? Link : "button";
  const borderRadius = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "rounded-none",
    full: "rounded-full",
  };
  const variants = {
    danger: "bg-red-500 text-white",
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    light: "bg-light text-white",
    subtle: "bg-transparent text-primary",
    outlined: "bg-transparent border border-primary text-primary",
    normal: "bg-gray-700 text-white",
  };
  const sizes = {
    sm: "py-2 px-6 text-xs",
    md: "py-3 px-12 ",
    lg: "px-24 py-3 ",
  };
  let isLoading = "cursor-wait opacity-50";
  return (
    <Element
      href={href ? href : {}}
      onClick={!href ? onClick : undefined}
      className={`text-sm font-medium text-center  
      ${compact ? "p-2" : sizes[size]}  
      ${borderRadius[rounded]} 
      ${uppercase ? "uppercase" : ""}
      ${href && "flex justify-center items-center"}
      ${variants[variant]}
      ${
        disabled
          ? " opacity-60 cursor-not-allowed"
          : `${loading ? isLoading : "hover:opacity-90"} `
      }
      `}
    >
      {loading ? (
        <div className="flex justify-center gap-2 items-center hover:opacity-100 w-fit h-fit">
          <Loading />
          <span className="my-auto"> {children}</span>
        </div>
      ) : (
        <span className="flex gap-2 justify-between">
          {LeftIcon && <LeftIcon />}
          <span className="my-auto"> {children}</span>
          {RightIcon && <RightIcon />}
        </span>
      )}
    </Element>
  );
}
