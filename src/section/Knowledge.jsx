import React from "react";
import Navbar from "../components/Navbar";
import FooterForm from "../components/FooterForm";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Knowledge = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="py-8 lg:py-28 w-[330px] lg:w-fit mx-auto">
        <h1 className="text-[#D2B976] text-center text-[64px] lg:text-[128px]">
          {t("e619d889-ae90-4248-b69e-e09b74251abc")}
        </h1>
        <div className="relative lg:flex lg:justify-between mt-8">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:w-[500px] mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">01</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">
              {t("41d94822-49e2-4a6b-9407-a1322c3d1330")}
            </h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              {t("137dffd6-d4da-4f8e-83c1-3a00d5d0866e")}
            </h2>
          </div>
          <div>
            <img
              src="./knowledge/diamond1.svg"
              className="absolute right-8 top-[200px] lg:right-[38rem] lg:top-[300px]"
            />
          </div>
        </div>
        <div className="relative mt-8 lg:w-fit lg:flex  lg:flex-row-reverse">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:ml-24 lg:w-[500px] mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto lg:mx-2 mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">02</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">
              {t("d74efab6-b770-40b0-aa83-aa04af71c402")}
            </h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              {t("810e3ee8-6821-4a03-ad69-20ff3a6351b1")}
            </h2>
            <div className="font-semibold text-[12px] text-[#111c72] grid grid-cols-2 py-8 gap-y-2">
              <h2>{t("f9f55977-2cc2-4205-947e-61bd3096f263")}</h2>
              <h2>{t("8f0a2bd2-e566-4418-a304-6ac7a992eb7e")}</h2>
              <h2>{t("abc61be1-e174-4414-8c2f-622028eacbde")}</h2>
              <h2>{t("b9510aa2-43b3-4ea6-9034-01905e629bc5")}</h2>
            </div>
          </div>
          <div>
            <img
              src="./knowledge/diamond2.svg"
              className="absolute right-8 top-[200px] lg:top-[314px] lg:right-0"
            />
          </div>
        </div>
        <div className="relative lg:gap-x-16 lg:flex mt-8">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:w-[500px] mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">03</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">
              {t("c455b62d-51b0-41c5-b752-1f2cdaec72d8")}
            </h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              {t("40601573-a474-4172-8e9d-8376c7ba3aef")}
            </h2>
            <div className="text-[#111c7a] mt-4 text-[12px] font-semibold leading-6">
              <h2>{t("282bbad4-381e-4c3f-9004-6112bd224122")}</h2>
              <h2 className="mt-4">
                {t("bbc67078-52f2-40f8-a9c1-9248ce191d3d")}
              </h2>
              <h2 className="mt-4">
                {t("4276f482-94dc-4a8b-b0a0-6d112d55762c")}
              </h2>
              <h2 className="mt-4">
                {t("47ff732c-2a1f-4d0e-ac22-3ca3d278c429")}
              </h2>
              <h2 className="mt-4">
                {t("7d137f31-4172-4b32-80bd-bca8c7df626c")}
              </h2>
              <h2>{t("e39172c7-dbd6-4a29-be1d-37d3198c6c9b")}</h2>
              <h2 className="mt-4">
                {t("fabeef3a-3c23-4826-b8c4-e283ab7e9ca3")}
              </h2>
              <h2>{t("1265ebd6-4739-4f01-b56d-525b1fb18400")}</h2>
            </div>
          </div>
          <div>
            <img
              src="./knowledge/diamond3.svg"
              className="absolute right-8 top-[200px] lg:right-[38rem] lg:top-[300px]"
            />
          </div>
        </div>
        <div className="relative mt-8 lg:w-fit lg:flex  lg:flex-row-reverse">
          <div>
            <img
              src="./knowledge/1.svg"
              className="w-[328px] lg:w-[500px] lg:ml-24 mx-auto"
            />
          </div>
          <div className="w-[320px] lg:w-[500px] mx-auto mt-4">
            <h2 className="text-[#D8A99E] text-[36px] lg:text-[60px]">04</h2>
            <h1 className="text-[#111c7a] text-[32px] lg:text-[64px]">
              {t("82ad04df-968a-466c-9828-74741bf99a59")}
            </h1>
            <h2 className="text-[#111c7a] text-[12px] lg:text-[16px] leading-6">
              {t("e71b3edd-c177-42ba-a59e-b4e5f74402df")}
            </h2>
          </div>
          <div>
            <img
              src="./knowledge/diamond4.svg"
              className="absolute right-8 top-[200px] lg:top-[314px] lg:right-0"
            />
          </div>
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
};

export default Knowledge;
