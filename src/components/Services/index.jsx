import React from "react";
import arrow from "../../assets/arrow.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const items = [
    {
      imgSrc: "./services/supply.svg",
      heading: t("0eb3e0a0-1c41-4abb-ba50-9960bc2a57b3"),
    },
    {
      imgSrc: "./services/sorting.svg",
      heading: t("9ed6fc39-6652-4b60-a69f-7aa5d70091e6"),
    },
    {
      imgSrc: "./services/bagging.svg",
      heading: t("76d64d34-69ec-443d-9b5d-fb2e3fc3e45e"),
    },
    {
      imgSrc: "./services/polishing.svg",
      heading: t("13b998ab-7300-4605-b5e8-3237e727ee35"),
    },
    {
      imgSrc: "./services/sets.svg",
      heading: t("4038a0b9-ba94-4d90-9c79-22dca8238927"),
    },
    {
      imgSrc: "./services/layout.svg",
      heading: t("5a09fe4d-33e6-4ada-8959-39612ffe3302"),
    },
  ];

  return (
    <div className="bg-[#fef4e9] py-20">
      <div className="flex flex-wrap  gap-x-10 w-[340px] xl:w-fit mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#A9C4C9] relative mt-16 w-[150px] xl:w-[180px] h-[170px] rounded-lg"
          >
            <div className="bg-[#111C7A] absolute top-[-40px] xl:left-12 left-9 py-2 px-4 rounded-lg">
              <img
                src={item.imgSrc}
                className="h-[50px] w-[50px]"
                alt={item.heading}
              />
            </div>
            <h1 className="text-[#111C7A] text-[14px] w-[120px] md:text-[20px] mx-auto font-semibold text-center pt-16">
              {item.heading}
            </h1>
          </div>
        ))}
      </div>
      <div className=" mt-8  sm:w-[fit] sm:mt-20">
        <h1 className="text-[#111c7a] font-bold text-[60px] leading-[78px] md:text-[128px] md:leading-[98px] text-center">
          {t("bae08a7b-653e-48e1-b0ae-9298b88aa1cf")}
        </h1>
        <h2 className="text-[#111c7a] text-[12px] md:text-[16px] leading-6 lg:leading-8 text-center pt-4 md:pt-16 sm:w-[600px] lg:w-[900px] sm:mx-auto">
          {t("8e3ab213-7ee5-49fa-91fc-e3041b2922ed")}
        </h2>
        <div className="flex justify-center mt-8">
          <Link to="/operations">
            <div className="flex bg-[#D8A99E] cursor-pointer w-fit py-4 md:px-[60px] px-6 gap-x-2 rounded-full">
              <h2 className="text-[#111c7a] text-[11px] md:text-[16px]">
                {t("e99fca3c-5c8f-4027-8a42-3d8c03c25c73")}
              </h2>
              <img src={arrow} className="w-[8px] sm:w-[12px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
