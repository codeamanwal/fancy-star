import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import VerticalSpacer from "../components/VerticalSpacer";
import arrow from "../assets/arrow.svg";
import necklace from "../assets/necklace.svg";
import ring from "../assets/ringform.svg";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="bg-[#A9C4C9] lg:flex  lg:pb-8">
        <div className="lg:ml-[10vw] lg:mt-[80px]">
          <h1 className="text-[32px] w-[300px] lg:w-[600px] ml-4 pt-8 lg:text-[64px] text-[#111c7a]">
            {t("3f4de8f4-dea3-4756-9370-91b6e97da266")}
          </h1>
          {/* <div className="flex justify-around ml-4 mt-8 font-semibold lg:w-[476px] lg:text-[16px] items-center text-[#1328A3] text-[10px] p-2 rounded-full bg-[#E6D8C6] w-[308px]">
            <span>{t("9e094c3d-3caf-41f8-a5e0-428e16d0c4de")}</span>
            <img src={arrow} className="h-[8px] lg:h-[12px]" />
          </div>
          <div className="flex justify-around ml-4 mt-8 items-center lg:w-[386px] lg:text-[16px] font-semibold text-[#1328A3] text-[10px] p-2 rounded-full bg-[#E6D8C6] w-[252px]">
            <span>{t("91d8c20f-9ae7-404d-9d14-41e050d725df")}</span>
            <img src={arrow} className="h-[8px] lg:h-[12px]" />
          </div> */}
        </div>
        <div className="bg-[#F8F9FA] w-[328px] lg:w-[570px] rounded-md mx-auto mt-8">
          <Form />
        </div>
        <VerticalSpacer />
      </div>
      <div className="overflow-hidden lg:relative xl:h-screen">
        <img
          src={necklace}
          className="w-full mx-auto lg:right-[-280px] lg:absolute lg:w-[50%] "
        />
        <h1 className="text-[32px] lg:text-[64px] xl:mt-[20vh] lg:pt-[100px] text-center text-[#1328a3] font-medium">
          {t("468fa6a5-867d-4216-9fd7-aeaaec77c2a5")}
        </h1>
        <div className="bg-[#D8A99E] flex gap-y-4 text-[#111c7a] lg:text-[24px] flex-col text-center w-[328px] lg:w-[650px] p-3 lg:py-8 mx-auto mt-4 text-[14px] font-medium rounded-lg">
          <h2>+987654321234</h2>
          <h2 className="sm:w-[400px] mx-auto">
            310 Gold Lane Building, Gold Souk, Diera, Dubai, UAE
          </h2>
        </div>
        <div className="mt-8 pb-4 flex flex-col gap-y-4 font-medium lg:pb-[100px] text-center text-[#111c7a]">
          <span className="text-[20px] lg:text-[32px]">
            {t("ce09e5c3-c014-40e3-bcc9-61941397f0ff")}
          </span>
          <span className="text-[14px] lg:text-[20px]">
            9:00AM - 7:00PM Dubai
          </span>
        </div>
        <img src={ring} className="hidden lg:block lg:absolute lg:bottom-0 " />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
