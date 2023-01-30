import React from "react";
import bannerImage from "../../images/banner.jpg";

const Banner: React.FC = () => {
  return (
    <>
      <div>
        <img
          src={bannerImage}
          className="w-full h-screen absolute"
          alt="bannerImage"
        />
        <div></div>
      </div>
    </>
  );
};
export default Banner;
