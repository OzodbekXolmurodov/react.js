import Image from "next/image";
import Link from "next/link";
import React from "react";
import logog from "../amage/Logo3.svg";
import rasim from "../amage/Clone Button.svg";
import Home from "../components/Home";

const Header = () => {
  return (
    <>
      <div className="bg-[#232536] p-[27px]">
        <div className="container flex justify-between">
          <Image src={logog} />
          <div className="flex items-center gap-8">
            <Link className="text-[#FFFFFF60]" href={"/"}>
              Home
            </Link>
            <Link className="text-[#FFFFFF60]" href={"/Service"}>
              Service
            </Link>
            <Link className="text-[#FFFFFF60]" href={"/Company"}>
              Company
            </Link>
            <Link className="text-[#FFFFFF60]" href={"/Career"}>
              Career
            </Link>
            <Link className="text-[#FFFFFF60]" href={"/Blog"}>
              Blog
            </Link>
            <Link className="text-[#FFFFFF60]" href={"/ContactUs"}>
              ContactUs
            </Link>
            <Image src={rasim} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
