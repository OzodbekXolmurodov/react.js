import Image from "next/image";
import React from "react";
import rasim from "../amage/Shapes@3x.png";
import rasim2 from "../amage/Shapes.png";
import rasim3 from "../amage/Logo.svg";
import rasim4 from "../amage/Social.svg";
import rasim5 from "../amage/Shapes1.png";
import rasim6 from "../amage/Contact.svg";

const Futer = () => {
  return (
    <>
      <div className="container relative">
        <Image className="absolute top-0 w-[88.59px]" src={rasim} alt="rasim" />
        <Image
          className="absolute top-0 right-0 w-[24px] h-[309px]"
          src={rasim2}
          alt="rasim"
        />

        <div className="flex items-center p-[96px] bg-[#666DFF] justify-between">
          <div>
            <p className="font-extralight text-[#FFFFFF] mb-[13px]">
              NEWSLETTER
            </p>
            <h2 className="text-4xl w-[456px] font-semibold text-[#FFFFFF]">
              Subscribe our News Letter to get Latest Updates.
            </h2>
          </div>
          <div>
            <input
              className="w-[400px] p-[10px] outline-none"
              placeholder="Paresh@Pixeto.com"
              type="text"
            />
          </div>
        </div>
        <div className="mt-[100px] flex items-baseline justify-between relative">
          <Image className="absolute top-[-60px]" src={rasim5} />
          <div className="w-[380px]">
            <h2 className="text-[40px] font-medium mb-[40px]">
              Let's make something special
            </h2>
            <p className="text-2xl font-medium mb-[30px]">Let's talk! 🤙 </p>
            <p className="mb-[7px]">020 7993 2905</p>
            <p className="mb-[14px]">hi@finsweet.com</p>
            <hr className="mb-[14px] w-[260px]" />
            <p className="w-[240px]">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>
          </div>
          <Image className="absolute right-0 bottom-0" src={rasim6} />
          <div>
            <h4 className="text-[19px] font-medium mb-[12px]">Home</h4>
            <h4 className="text-[19px] font-medium mb-[12px]">Service</h4>
            <h4 className="text-[19px] font-medium mb-[12px]">Company</h4>
            <h4 className="text-[19px] font-medium mb-[12px]">Company</h4>
            <h4 className="text-[19px] font-medium mb-[12px]">News</h4>
          </div>
          <div>
            <h4 className="text-[19px] font-medium mb-[12px]">Service</h4>
            <p className="text-[#232536] mb-[12px] font-medium">
              Technical support
            </p>
            <p className="text-[#232536] mb-[12px] font-medium">Testing</p>
            <p className="text-[#232536] mb-[12px] font-medium">Development</p>
            <p className="text-[#232536] mb-[12px] font-medium">AWS/Azure </p>
            <p className="text-[#232536] mb-[12px] font-medium">Consulting</p>
            <p className="text-[#232536] mb-[12px] font-medium">
              Information Technology
            </p>
          </div>
          <div className="pr-[100px]">
            <h4 className="text-[19px] font-medium mb-[12px] ">Resourses</h4>
            <p className="text-[#232536] mb-[12px] font-medium">About Us</p>
            <p className="text-[#232536] mb-[12px] font-medium">Testimonial</p>
            <p className="text-[#232536] mb-[12px] font-medium">
              Privacy Policy
            </p>
            <p className="text-[#232536] mb-[12px] font-medium">Terms of use</p>
            <p className="text-[#232536] mb-[12px] font-medium">Blog</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE6D2] p-[28px] mt-[64px]">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-11">
            <Image src={rasim3} />
            <p>©2021 Finsweet</p>
          </div>
          <Image src={rasim4} />
        </div>
      </div>
    </>
  );
};

export default Futer;
