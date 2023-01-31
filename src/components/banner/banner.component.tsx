import React from "react";
import BannerForm from "../banner-form/banner-form.tsx";

const Banner: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Lorem ipsum dolor sit consectetur.</p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">Heading</h1>
            <p className="text-2xl">Lorem ipsum dolor sit..</p>
            <button
              className="py-3 px-6 sm:w-[60%] my-4  text-white border bg-indigo-600 border-indigo-600
      hover:bg-transparent hover:text-indigo-600 rounded-md"
            >
              Get Started
            </button>
          </div>
          <div>{<BannerForm />}</div>
        </div>
      </div>
    </>
  );
};
export default Banner;
