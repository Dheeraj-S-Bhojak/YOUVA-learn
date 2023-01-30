import React from "react";
import bannerImage from "../../images/banner.jpg";

const Banner: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Lorem ipsum dolor sit consectetur.</p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">Heading</h1>
            <p className="text-2xl">Lorem ipsum dolor sit..</p>
            <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
          </div>
          <div>{/**import banner form here */}</div>
        </div>
      </div>
    </>
  );
};
export default Banner;
