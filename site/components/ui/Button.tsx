"use client";
import React from "react";
import Link from "next/link";
import Loading from "./loading";
interface props {
  variant?: "primary" | "danger" | "success" | "outlined" | "normal";
  size?: "sm" | "md" | "lg";
  loading?: Boolean;
  href?: string;
  rounded?: Boolean;
  rightIcon?: void | null;
  leftIcon?: void | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element | JSX.Element[] | String;
}
interface sizes {
  sm: string;
  md: string;
  lg: string;
}

interface variants {
  danger: string;
  primary: string;
  success: string;
  outlined: string;
  normal: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  loading,
  rounded = false,
  href,
  children,
  onClick,
  rightIcon = null,
  leftIcon = null,
}: props) {
  const Element = href ? Link : "button";
  const variants: variants = {
    danger: "bg-red-500 text-white",
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    outlined: "bg-transparent border border-primary text-primary",
    normal: "bg-gray-700 text-white",
  };
  const sizes: sizes = {
    sm: "py-2 px-6 text-xs",
    md: "py-3 px-12 ",
    lg: "px-24 py-3 ",
  };
  let isLoading = "cursor-wait opacity-50";
  return (
    <Element
      href={href ? href : {}}
      onClick={(event) => (!href ? event.preventDefault() : onClick)}
      className={`text-sm  font-medium text-center  ${
        loading ? isLoading : null
      }  ${variants[variant]} ${sizes[size]}  ${
        rounded ? "rounded-full" : "rounded"
      } `}
    >
      {loading ? (
        <div className="flex">
          {" "}
          <Loading size={size} color="#1C64F2" />
          <span className="my-auto mr-2 ">Loading</span>{" "}
        </div>
      ) : (
        <>
          {rightIcon}
          {children}
          {leftIcon}
        </>
      )}
    </Element>
  );
}