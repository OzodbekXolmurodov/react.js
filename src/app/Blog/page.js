import Image from "next/image";
import React from "react";
import rasim2 from "../../amage/Header4.svg";

const Blog = () => {
  return (
    <div>
      <div className="container">
        <Image className="ml-[100px] mt-10 mb-10" src={rasim2} alt="" />
      </div>
    </div>
  );
};

export default Blog;
