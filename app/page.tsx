"use client";
import Image from "next/image";
import vector from "@/public/hero/vector1.png";
import quote from "@/public/hero/quote-up.png";
import rating from "@/public/hero/rating.png";
import shape from "@/public/hero/shape.png";
import frame from "@/public/hero/frame.png";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const [protfolio, setProtfolio] = useState(true);
  const primaryHeading = useRef(null);
  const primaryContent = useRef(null);
  const frameRef = useRef(null);
  useGSAP(() => {
    const heading = primaryHeading.current;
    const content = primaryContent.current;
    const frame = frameRef.current;
    if (!heading) return;

    if (protfolio) {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 300, scale: 0.8 }, // Start off-screen (below)
        {
          opacity: 1,
          y: 0, // Moves to original position
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
      gsap.to(content, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(frame, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      // Animate fading out and moving back to the bottom
      gsap.to(heading, {
        opacity: 0,
        y: 300, // Moves back to below the screen
        scale: 0.8,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(
        content,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -200,
          duration: 0.5,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        frame,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [protfolio]);

  return (
    <div className="relative xl:h-[800px] h-[750px]  text-black">
      <div ref={primaryHeading} className="text-center">
        <div className="relative h-[45px] mx-auto w-[103px] mt-8 ">
          <span className="h-full w-full flex justify-center items-center border rounded-full border-lightBlack  font-medium text-20px">
            Hello!
          </span>
          <Image
            placeholder="blur"
            src={vector}
            width={28}
            height={29}
            className="absolute -right-4 -top-5"
            alt="vector image hero section png"
          />
        </div>
        <div className="font-semibold text-primaryHeading">
          <h1>
            I’m <span className="text-primary">Ali Usman</span>,
          </h1>
          <div className="relative max-w-[900px] mx-auto">
            <h1 className="-mt-8">Frontend Developer</h1>
            <Image
              placeholder="blur"
              src={vector}
              width={72}
              height={75}
              className="absolute -left-9 -bottom-7 -rotate-180"
              alt="vector image hero section png"
            />
          </div>
        </div>
      </div>
      <div
        ref={primaryContent}
        className="flex justify-between items-center mt-20"
      >
        <div className="max-w-[20.5rem] flex flex-col items-start gap-5">
          <Image
            placeholder="blur"
            src={quote}
            width={36}
            height={36}
            alt="quotes start png"
          />
          <p className="text-secondary text-20px font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quidem
            similique veritatis neque.
          </p>
        </div>
        <div className="flex items-end gap-5 flex-col">
          <Image
            placeholder="blur"
            src={rating}
            width={162}
            height={32}
            alt="ratings start png"
          />
          <div className="text-right">
            <h3 className="font-bold -mb-2 text-[2.9375rem]">10 Years</h3>
            <span className="text-20px ">Experince</span>
          </div>
        </div>
      </div>
      <div className="absolute  w-full max-w-[59.5rem] h-[39.875rem] translate-x-1/2 right-1/2 bottom-0">
        <div className="relative max-w-[59.5rem] h-[39.875rem] ">
          <Image
            width={952}
            height={638}
            placeholder="blur"
            src={shape}
            alt="Profile image hero section png "
            className="-bottom-[26px] absolute "
          />
          <Image
            ref={frameRef}
            placeholder="blur"
            src={frame}
            alt="Profile image hero section png "
            className="-bottom-[26px] absolute "
          />
          <Image
            width={952}
            height={638}
            src={"/hero/woman.png"}
            alt="Profile image hero section png "
            className="-bottom-[26px]  absolute z-50"
          />
          <div className="absolute max-w-[362px] min-h-[86px] border-[2px] border-white rounded-full backdrop-blur-lg w-full translate-x-1/2 flex p-2 items-center gap-5   bottom-3 right-1/2 text-[1.5625rem] z-[999] justify-between">
            <span
              onClick={() => {
                setProtfolio(true);
              }}
              className={`font-thin rounded-full py-3 px-8 text-white  cursor-pointer flex justify-center items-center animation ${
                protfolio
                  ? "bg-primary !font-medium border  border-[#D0D5DD]"
                  : ""
              }`}
            >
              Protfolio
            </span>
            <span
              onClick={() => {
                setProtfolio(false);
              }}
              className={`font-thin cursor-pointer animation py-3 px-8 text-white  ${
                !protfolio
                  ? "bg-primary !font-medium   border rounded-full border-[#D0D5DD]"
                  : ""
              }`}
            >
              Hire Me
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
