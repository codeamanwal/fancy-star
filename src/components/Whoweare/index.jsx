import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import ringshadow from "../../assets/ringshadow.svg";
import diamonds from "../../assets/diamonds.svg";
import earrings from "../../assets/earrings.svg";
import { useTranslation } from "react-i18next";
const Whoweare = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-[350px] sm:w-[90vw] mx-auto relative bg-[#A9C4C9] text-[#111c7a] rounded-lg p-4 md:p-16">
        <h1 className=" text-[24px] md:text-[48px] font-semibold mt-4">
          {t("584d978c-6746-4b0c-82ff-f85478ae52ae")}
        </h1>
        <p className="mt-8 text-[12px] md:text-[16px] leading-7 w-[290px] md:w-fit lg:w-[800px]">
          {t("af01c956-26cf-4bd0-8bcc-8417f0837c61")}
        </p>
        <Link to="/aboutus">
          <div className="flex gap-x-2 cursor-pointer font-semibold md:justify-end md:text-[20px] pt-8 border-b-[1px] pb-4 border-[#111c7a]">
            <h1 className="uppercase">
              {t("81249cde-3fbe-4379-a1a1-b3fee75eafed")}
            </h1>
            <img src={arrow} />
          </div>
        </Link>
        <div className="flex gap-x-12 pt-10 pb-16 ">
          <div>
            <h1 className="text-[40px] md:text-[64px]">05</h1>
            <h1 className="text-[12px] md:text-[16px] font-semibold">
              {t("afafd45e-51e7-43d6-81dd-021342d777d7")}
            </h1>
          </div>
          <div>
            <h1 className="text-[40px] md:text-[64px]">25+</h1>
            <h1 className="text-[12px] md:text-[16px] font-semibold">
              {t("ffb44955-0b62-45f0-ae47-14bfd526043d")}
            </h1>
          </div>
          <div>
            <h1 className="text-[40px] md:text-[64px]">50+</h1>
            <h1 className="text-[12px] md:text-[16px] font-semibold">
              {t("a38e668d-13f1-46f8-a35e-786e0cca53bc")}
            </h1>
          </div>
        </div>
        <div className="absolute bottom-[-100px] right-2 md:bottom-[-230px]">
          <img src={ringshadow} className="md:h-[440px]" />
        </div>
      </div>
      <div className="relative w-[360px] md:ml-10 lg:ml-[10vw] ">
        <img src={diamonds} className="pt-16 pl-4 lg:h-[295px] " />
        <img
          src={earrings}
          className="absolute right-4 lg:right-[-100px] pb-8 lg:h-[561px] top-[120px]"
        />
      </div>
      <div className="text-[#111c7a] w-[340px] lg:ml-[50vw] md:w-[350px] md:ml-[200px] lg:w-[400px] xl:w-[600px] mx-auto mt-[260px] lg:mt-[-100px]">
        <h1 className="text-[24px] md:text-[48px] font-semibold">
          {t("f49e4a90-a505-4056-a538-5b015fbbfafb")}
        </h1>
        <p className="mt-2 text-[12px] md:text-[16px] md:leading-8 leading-6 font-medium">
          {t("5cfa559e-4b54-47a2-8bb8-b23106136ee5")}
        </p>
      </div>
      <div className="text-[#111c7a] w-[340px] md:w-[350px] lg:w-[400px] md:ml-[200px] xl:w-[600px] lg:ml-[50vw] mx-auto mt-8">
        <h1 className="text-[24px] md:text-[48px] font-semibold">
          {t("7fc6a336-84f7-4568-9a6b-7985f4431646")}
        </h1>
        <p className="mt-2 text-[12px] md:text-[16px] md:leading-8 leading-6 font-medium">
          {t("30641e7d-239e-45d9-b98b-a94abf8711e5")}
        </p>
      </div>
      <div className="flex mt-8 justify-center lg:mt-[100px] pb-8">
        <Link to="/aboutus">
          <div className="flex bg-[#D8A99E] w-fit py-4 px-6 gap-x-4 md:px-[60px] rounded-full">
            <h2 className="text-[#111c7a] font-semibold">
              {t("d6788902-6f8e-453d-af40-04aad0556297")}
            </h2>
            <img src={arrow} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Whoweare;
