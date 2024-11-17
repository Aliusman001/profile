import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-black justify-between flex items-center p-3 mx-5 2xl:mx-10 rounded-full h-[86px]">
      <ul className="text-white flex text-20px gap-2">
        {["Home", "About", "Services"].map((link, index) => {
          return (
            <li key={index}>
              <Link
                href=""
                className={`h-[66px] flex justify-center items-center rounded-full  ${
                  index === 0 ? "bg-primary" : " "
                } w-[136px]`}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center items-center gap-3">
        <span className="bg-primary w-10 h-10 rounded-full"></span>
        <span className="uppercase text-3xl text-white font-bold">
          Ali Usman
        </span>
      </div>
      <ul className="text-white text-20px flex gap-2">
        {["Project", "Resume", "Contact"].map((link, index) => {
          return (
            <li key={index}>
              <Link
                href=""
                className="h-[66px] flex justify-center items-center rounded-full   w-[136px]"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
