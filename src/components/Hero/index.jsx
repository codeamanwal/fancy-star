import React from "react";
import heromobile from "../../assets/heromobile.svg";
import herodesktop from "../../assets/herodesktop.svg";
import ring from "../../assets/ring.svg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative">
        <div>
          <img src={heromobile} className="w-full sm:hidden" />
          <img
            src={herodesktop}
            className="w-[100%] object-cover h-[800px] hidden sm:flex"
          />
        </div>
        <div className="absolute top-4 left-4 sm:left-[100px] lg:top-[380px] w-[full] sm:w-[500px] lg:w-[900px] xl:w-[1000px]">
          <h1 className=" text-white text-[32px] md:text-[64px] leading-10 md:leading-[72px]">
            {t("9cb4cbb2-1714-4b6e-9eff-3f861399c5c4")}
          </h1>
          <h2 className="text-white text-[12px] md:text-[20px] mt-4 md:mt-8 leading-6">
            {t("a4bcfc43-b49b-490a-8f6a-47b3dc624359")}
          </h2>
        </div>
        <div className="sm:flex sm:justify-center">
          <img
            src={ring}
            className="absolute w-full bottom-[-60px] sm:w-[475px] sm:bottom-[-70px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
