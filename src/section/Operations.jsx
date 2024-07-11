import React from "react";
import FooterForm from "../components/FooterForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import diamonds from "../assets/diamonds.svg";
import earrings from "../assets/earrings.svg";
import VerticalSpacer from "../components/VerticalSpacer";
import { useTranslation } from "react-i18next";
const Operations = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="min-h-screen lg:w-[1000px] lg:mx-auto">
        <div className="relative min-h-[75vh] sm:w-[360px] md:w-[700px] mx-auto">
          <img src={diamonds} className="pt-16 pl-4 lg:h-[295px]" />
          <img
            src={earrings}
            className="absolute right-4 lg:right-[120px] pb-8 lg:h-[561px] top-[120px]"
          />
          <img
            src="./operations/neck.svg"
            className="absolute left-10 lg:left-[14rem] w-[300px] lg:w-full lg:bottom-[-340px]"
          />

          <div className="absolute z-[-1] left-4 bottom-5 lg:bottm-[100px]">
            <img src="./operations/diamond.svg" />
          </div>
          <div className="absolute z-[-1] lg:w-[200px] lg:mt-8 right-0 top-4 lg:">
            <img src="./operations/outlinediamonds.svg" />
          </div>
        </div>
        <div>
          <h1 className="text-[#111c7a] text-[32px] lg:mt-32 text-center mt-8 w-[340px] font-semibold mx-auto leading-[40px]">
            {t("6bb22a23-3b81-4395-ba7d-4376188f9816")}
          </h1>
          <div>
            <img
              src="./operations/font.svg"
              className="w-[340px] my-8 mx-auto"
            />
          </div>
          <div>
            <img
              src="./operations/arrow.svg"
              className="w-[fit] mx-auto h-[34px]"
            />
          </div>
        </div>
      </div>
      <VerticalSpacer />
      <div className="container min-w-[100vw] mt-4">
        <div className="w-[360px] lg:w-[1020px] mx-auto">
          <div className="flex justify-between lg:justify-normal mx-2">
            <h2 className="text-[36px] lg:text-[60px] text-[#D2B976]">01</h2>
            <img
              src="./operations/1.svg"
              className="mt-[-50px] lg:ml-[40vw] lg:h-[100px] w-[50px] lg:w-[100px]"
            />
          </div>
          <h1 className="text-[#1328A3] font-medium text-[32px] lg:text-[64px] ml-2">
            {t("cdcc920d-f21b-4daa-a581-f2a27107a8c6")}
          </h1>
          <div className="lg:flex lg:gap-8 lg:w-[1000px] lg:mx-auto">
            <div className="relative ">
              <img src="./operations/h1.png" className="mt-2 w-full" />
              <img
                src="./operations/j1.svg"
                className="absolute w-[200px] lg:w-full bottom-[-64px] lg:bottom-[-200px]"
              />
            </div>
            <div className="mt-8 ml-2">
              <h2 className="text-[#111c7a] lg:text-[22px] lg:w-[400px]">
                {t("0e7392a0-b9fd-49cd-9a7e-a2c1fc635ce8")}
              </h2>
            </div>
          </div>
        </div>
        <VerticalSpacer />
        <div className="w-[360px] lg:w-[1020px] mx-auto">
          <div className="flex justify-between lg:flex-row-reverse  mx-2">
            <h2 className="text-[36px] text-right text-[#D2B976] lg:text-[60px]">
              02
            </h2>
            <img
              src="./operations/2.svg"
              className="mt-[-50px] lg:mt-[-230px] lg:ml-[800px] lg:w-[100px]"
            />
          </div>
          <h1 className="text-[#1328A3] lg:text-[64px] font-medium lg:flex lg:justify-end text-[32px] ml-2">
            {t("7d1d214d-6d60-404a-923b-1a2a762fc95c")}
          </h1>
          <div className="lg:flex lg:flex-row-reverse lg:gap-x-8 lg:w-[1000px] lg:mx-auto">
            <div className="relative">
              <img
                src="./operations/h2.svg"
                className="lg:w-[560px] mt-2 w-full"
              />
            </div>
            <div className="mt-8 ml-2">
              <h2 className="text-[#111c7a] lg:w-[400px] lg:text-[22px]">
                {t("1801f5b3-c45d-4d21-b92f-1419316436b3")}
              </h2>
            </div>
          </div>
        </div>
        <VerticalSpacer />
        <div className="w-[360px] lg:w-[1020px] mx-auto">
          <div className="flex justify-between lg:justify-normal mx-2">
            <h2 className="text-[36px] lg:text-[60px] text-[#D2B976]">03</h2>
            <img
              src="./operations/1.svg"
              className="mt-[-50px] w-[50px] lg:ml-[40vw] lg:h-[100px] lg:w-[100px]"
            />
          </div>
          <h1 className="text-[#1328A3] font-medium text-[32px] lg:text-[64px] ml-2">
            {t("76d64d34-69ec-443d-9b5d-fb2e3fc3e45e")}
          </h1>
          <div className="lg:flex lg:gap-8 lg:w-[1000px] lg:mx-auto">
            <div className="relative ">
              <img src="./operations/h1.png" className="mt-2 w-full" />
              <img
                src="./operations/j3.svg"
                className="absolute bottom-[-64px] w-[200px]"
              />
            </div>
            <div className="mt-8 ml-2">
              <h2 className="text-[#111c7a] lg:text-[22px] lg:w-[400px]">
                {t("20dec4c2-c383-411c-9042-1e228d040762")}
              </h2>
            </div>
          </div>
        </div>
        <VerticalSpacer />
        <div className="w-[360px] lg:w-[1020px] mx-auto">
          <div className="flex justify-between lg:flex-row-reverse  mx-2">
            <h2 className="text-[36px] text-right text-[#D2B976] lg:text-[60px]">
              04
            </h2>
            <img
              src="./operations/2.svg"
              className="mt-[-50px] lg:mt-[-230px] lg:ml-[800px] lg:w-[100px]"
            />
          </div>
          <h1 className="text-[#1328A3] lg:text-[64px] font-medium lg:flex lg:justify-end text-[32px] ml-2">
            {t("bab5c187-97fb-4e73-a3ae-cfb9d72945e0")}
          </h1>
          <div className="lg:flex lg:flex-row-reverse lg:gap-x-8 lg:w-[1000px] lg:mx-auto">
            <div className="relative">
              <img
                src="./operations/h2.svg"
                className="lg:w-[560px] mt-2 w-full"
              />
            </div>
            <div className="mt-8 ml-2">
              <h2 className="text-[#111c7a] lg:w-[400px] lg:text-[22px]">
                {t("c2233614-72b6-4384-87ec-213c9bc42bc3")}
              </h2>
            </div>
          </div>
        </div>
        <VerticalSpacer />
        <div className="w-[360px] lg:w-[1020px] mx-auto">
          <div className="flex justify-between lg:justify-normal mx-2">
            <h2 className="text-[36px] lg:text-[60px] text-[#D2B976]">05</h2>
            <img
              src="./operations/1.svg"
              className="mt-[-50px] lg:ml-[40vw] lg:h-[100px] w-[50px] lg:w-[100px]"
            />
          </div>
          <h1 className="text-[#1328A3] font-medium text-[32px] lg:text-[64px] ml-2">
            {t("4038a0b9-ba94-4d90-9c79-22dca8238927")}
          </h1>
          <div className="lg:flex lg:gap-8 lg:w-[1000px] lg:mx-auto">
            <div className="relative ">
              <img src="./operations/h1.png" className="mt-2 w-full" />
              <img
                src="./operations/j5.svg"
                className="absolute bottom-[-60px] w-[200px] left-[70px]"
              />
            </div>
            <div className="mt-8 ml-2">
              <h2 className="text-[#111c7a] lg:text-[22px] lg:w-[400px]">
                {t("383a7ded-cd29-4d23-8984-efbdf24e89c4")}
              </h2>
            </div>
          </div>
        </div>
        <VerticalSpacer />
        <div className="w-[360px] lg:w-[1020px] mx-auto">
          <div className="flex justify-between lg:flex-row-reverse  mx-2">
            <h2 className="text-[36px] text-right text-[#D2B976] lg:text-[60px]">
              06
            </h2>
            <img
              src="./operations/2.svg"
              className="mt-[-50px] lg:mt-[-230px] lg:ml-[800px] lg:w-[100px]"
            />
          </div>
          <h1 className="text-[#1328A3] lg:text-[64px] font-medium lg:flex lg:justify-end text-[32px] ml-2">
            {t("5a09fe4d-33e6-4ada-8959-39612ffe3302")}
          </h1>
          <div className="lg:flex lg:flex-row-reverse lg:gap-x-8 lg:w-[1000px] lg:mx-auto">
            <div className="relative">
              <img
                src="./operations/h2.svg"
                className="lg:w-[560px] mt-2 w-full"
              />
            </div>
            <div className="mt-8 ml-2">
              <h2 className="text-[#111c7a] lg:w-[400px] lg:text-[22px]">
                {t("7d650545-9492-41da-9a65-fe40eff0d274")}
              </h2>
            </div>
          </div>
        </div>
        <VerticalSpacer />
      </div>
      <FooterForm />
      <Footer />
    </>
  );
};

export default Operations;
