import React from "react";
import necklace from "../../assets/necklace.svg";
import VerticalSpacer from "../../components/VerticalSpacer";
import ring2 from "../../assets/new.svg";
import Form from "../../components/Form";
import { useTranslation } from "react-i18next";

const FooterForm = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0A0E25] h-[250%] xl:relative">
      <img src={necklace} className="w-fit mx-auto lg:w-[1100px]" />
      <h1 className="text-[32px] lg:text-[64px] 2xl:absolute 2xl:left-[3vw] 2xl:text-left 2xl:top-[350px] w-[300px] xl:w-[600px] mx-auto text-[#D2B976] text-center">
        {t("572d0bde-3280-4cf6-b383-141ab11b98ee")}
      </h1>
      <div className="w-[329px] 2xl:absolute xl:top-16 xl:right-[10vh] md:w-[500px] md:h-[700px] xl:w-[570px] xl:h-[746px] rounded-lg bg-[#F8F9FA] mx-auto mt-4 h-[430px]">
        <Form />
      </div>

      <img
        src={ring2}
        className="w-[200px] mx-auto md:mx-0 lg:ml-[2vw] lg:w-[400px]"
      />
    </div>
  );
};

export default FooterForm;
