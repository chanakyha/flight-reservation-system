import React, { useEffect } from "react";
import { Plane } from "react-loader-spinner";
import FlightSVG from "./assets/svg/airplane.svg";

const Loader = () => {
  useEffect(() => {
    document.title = "Loading...";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen p-[20%]">
      <h1 className="font-bold text-4xl text-[#00BFA6]">FlyHigh</h1>
      <img src={FlightSVG} alt="airplace-svg" className="md:w-1/2 mt-[20px]" />
      <Plane ariaLabel="loading-indicator" color="#00BFA6" />
    </div>
  );
};

export default Loader;
