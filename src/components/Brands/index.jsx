import React from "react";
import VerticalSpacer from "../VerticalSpacer";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-[#111c7a] text-center font-semibold text-[32px] md:text-[64px]">
        {t("57bfc6ee-46da-47ec-a282-2ebaf0adf229")}
      </h1>
      <div className="flex mt-16 justify-evenly">
        <div className="w-[100px] sm:w-[344px] h-[38px] bg-[#efe3d5]"></div>
        <div className="w-[100px] sm:w-[344px] h-[38px] bg-[#efe3d5]"></div>
        <div className="w-[100px] sm:w-[344px] h-[38px] bg-[#efe3d5]"></div>
      </div>
      <VerticalSpacer />
      <VerticalSpacer />
    </>
  );
};

export default Brands;
