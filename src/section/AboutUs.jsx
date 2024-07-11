import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import diamonds from "../assets/diamonds.svg";
import earrings from "../assets/earrings.svg";
import VerticalSpacer from "../components/VerticalSpacer";
import { Chrono } from "react-chrono";
import FooterForm from "../components/FooterForm";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative xl:flex xl:justify-center">
          <h1 className="text-center w-[360px] mx-auto leading-[100px] my-4 sm:mt-8 text-[64px] sm:text-[70px] xl:text-[128px] sm:w-[600px] lg:w-[800px] xl:w-[1300px] sm:leading-[150px] md:h-[400px] text-[#d2b976]">
            {t("ab601741-7926-410a-9ee3-56422bd70093")}
          </h1>
          <div className="absolute  left-[200px] sm:left-[400px] xl:left-[1100px] 2xl:left-[70vw] xl:top-[-40px] top-10"></div>
          <div className="absolute left-0 bottom-[25px] sm:left-[400px] xl:bottom-[125px] xl:left-[10vw]"></div>
        </div>
        <div className="xl:hidden">
          <VerticalSpacer />
        </div>
        <div className="relative">
          <div>
            <img
              src="./aboutus/hero.svg"
              className="w-[100%] sm:h-[710px] sm:w-[fit] lg:h-[70vh] object-cover"
            />
          </div>
          <div>
            <img
              src="./aboutus/snap.svg"
              className="absolute sm:left-[40vw] lg:left-[50vw] bottom-[-80px] sm:bottom-[-30vh] xl:h-[500px]"
            />
          </div>
          <div className="sm:hidden"></div>
        </div>
        <VerticalSpacer />
        <div className="">
          {/* <h5 className="text-[45px] text-center text-nowrap md:hidden">
            {t("981de149-816d-4e2e-9e77-d85af61e11da")}
          </h5> */}
          <div className="md:hidden">
            <VerticalSpacer />
          </div>
          <div className="text-left sm:w-[400px] lg:w-[700px] md:ml-[5vw] text-[#111c72] mx-4">
            <h1 className="text-[32px] md:text-[64px] md:mt-8 font-semibold md:leading-[84px] leading-10">
              {t("3180650f-15c0-4d84-a0fc-a7bf3c05366b")}
            </h1>
            <div className="md:hidden">
              <VerticalSpacer />
            </div>
            <div className="lg:flex lg:gap-x-8">
              <h2 className="text-[12px] leading-6 md:mt-8 lg:w-[340px] md:text-[16px] md:leading-8">
                {t("543dda2d-8f2f-446d-b661-cc8c0e971faa")}
              </h2>
              <div className="md:hidden">
                <VerticalSpacer />
              </div>
              <h2 className="text-[12px] leading-6 md:mt-8 md:text-[16px] lg:w-[340px] md:leading-8">
                {t("31a1ef5c-7582-44dc-8284-ae536612ece1")}
              </h2>
            </div>
            {/* <h5 className=" hidden md:block text-[45px] lg:ml-[20vh] text-nowrap text-right xl:text-[161px]">
              {t("981de149-816d-4e2e-9e77-d85af61e11da")}
            </h5> */}
          </div>
        </div>
        <VerticalSpacer />
        <div>
          <VerticalSpacer />
          <div className="lg:hidden" style={{ width: "100%" }}>
            {/* <Chrono
              theme={{
                primary: "#D8A99E",
                secondary: "#D8A99E",
                cardBgColor: "#fef4e9",
              }}
              mode="VERTICAL"
              disableToolbar
              disableClickOnCircle
              cardHeight={400}
              borderLessCards={true}
            >
              <div className="min-h-[300px] card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] font-semibold">
                  2024
                </h1>
                <h2 className="text-[#111c72] mt-8 md:text-[16px] text-[12px] leading-6">
                  {t("e4af80ee-a7d7-4cee-b43e-0e405bf9a911")}
                </h2>
              </div>
              <div className="min-h-[300px] card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] font-semibold">
                  2023
                </h1>
                <h2 className="text-[#111c72] mt-8 md:text-[16px] text-[12px] leading-6">
                  {t("e4af80ee-a7d7-4cee-b43e-0e405bf9a911")}
                </h2>
              </div>
              <div className=" min-h-[300px] card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] font-semibold">
                  2022
                </h1>
                <h2 className="text-[#111c72] md:text-[16px] mt-8 text-[12px] leading-6">
                  {t("e4af80ee-a7d7-4cee-b43e-0e405bf9a911")}
                </h2>
              </div>
            </Chrono> */}
          </div>
          <div className="hidden lg:block" style={{ width: "100%" }}>
            {/* <Chrono
              theme={{
                primary: "#D8A99E",
                secondary: "#D8A99E",
                cardBgColor: "#fef4e9",
              }}
              mode="VERTICAL_ALTERNATING"
              disableToolbar
              disableClickOnCircle
              cardHeight={400}
              borderLessCards={true}
            >
              <div className=" min-h-[300px] p-4 card">
                <h1 className="flex text-[#D8A99E] mt-4 lg:text-[60px] text-[39px] font-semibold">
                  2024
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] lg:text-[16px] lg:leading-8 leading-6">
                  {t("e4af80ee-a7d7-4cee-b43e-0e405bf9a911")}
                </h2>
              </div>
              <div className=" min-h-[300px] p-4 card">
                <h1 className="flex text-[#D8A99E] mt-4 lg:text-[60px] text-[39px] font-semibold">
                  2023
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] g:text-[16px] lg:leading-8 leading-6">
                  {t("e4af80ee-a7d7-4cee-b43e-0e405bf9a911")}
                </h2>
              </div>
              <div className=" min-h-[300px] p-4 card">
                <h1 className="flex text-[#D8A99E] mt-4 text-[39px] lg:text-[60px] font-semibold">
                  2022
                </h1>
                <h2 className="text-[#111c72] mt-8 text-[12px] g:text-[16px] lg:leading-8 leading-6">
                  {t("e4af80ee-a7d7-4cee-b43e-0e405bf9a911")}
                </h2>
              </div>
            </Chrono> */}
          </div>
        </div>
        <VerticalSpacer />

        <div className="bg-[#A9C4C9] sm:grid sm:justify-center">
          <div className="relative w-[360px] md:ml-10 lg:ml-8 ">
            <img src={diamonds} className="pt-16 pl-4 lg:h-[295px] " />
            <img
              src={earrings}
              className="absolute right-4 lg:right-[-100px] pb-8 lg:h-[561px] top-[120px]"
            />
          </div>
          <div className="text-[#111c7a] w-[340px] lg:ml-[580px] md:w-[350px] md:ml-[200px] lg:w-[400px] xl:w-[600px] mx-auto mt-[260px] lg:mt-[-100px]">
            <h1 className="text-[24px] md:text-[48px] font-semibold">
              {t("f49e4a90-a505-4056-a538-5b015fbbfafb")}
            </h1>
            <h2 className="mt-2 text-[12px] md:text-[16px]   md:leading-8 leading-6 font-medium">
              {t("5cfa559e-4b54-47a2-8bb8-b23106136ee5")}
            </h2>
          </div>
          <div className="text-[#111c7a] w-[340px] md:w-[350px] lg:w-[400px] md:ml-[200px] xl:w-[600px] lg:ml-[580px] mx-auto mt-8">
            <h1 className="text-[24px] md:text-[48px] font-semibold">
              {t("7fc6a336-84f7-4568-9a6b-7985f4431646")}
            </h1>
            <h2 className="mt-2 text-[12px] md:text-[16px] md:leading-8 leading-6 font-medium">
              {t("30641e7d-239e-45d9-b98b-a94abf8711e5")}
            </h2>
          </div>
          <VerticalSpacer />
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
};

export default AboutUs;
