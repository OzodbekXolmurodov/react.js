import Image from "next/image";
import rasim2 from "../amage/Header.svg";

export default function Home() {
  return (
    <>
      <div className="bg-[#232536]">
        <div className="container ">
          <Image className="mb-10" src={rasim2} alt="" />
        </div>
      </div>
    </>
  );
}
