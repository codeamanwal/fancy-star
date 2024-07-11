import React from "react";
import "./index.css";
import logofooter from "../../assets/logofooter.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer">
        <div className="bg-[#D2B976] lg:flex lg:gap-x-8 lg:border-b-[1px] mx-2 sm:mx-4 lg:border-b-[#111c7a]">
          <div className="w-[239px] lg:w-[350px] mx-auto lg:ml-[10vh] lg:mr-[10vh]">
            <Link to="/">
              <img src={logofooter} className="lg:w-[350px]" />
            </Link>
          </div>
          <div className="flex justify-center gap-12 lg:text-left mt-8 ">
            <div className="text-center lg:text-left flex flex-col gap-y-2 text-[#111c7a]">
              <Link to="/aboutus">
                <h1 className="text-[14px] lg:text-[20px] font-bold">
                  {t("81249cde-3fbe-4379-a1a1-b3fee75eafed")}
                </h1>
              </Link>
              <Link to="/aboutus">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("a304dd2a-6256-4003-9069-f75f6781ecef")}
                </h2>
              </Link>
              <Link to="/aboutus">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("3f368db8-dba1-4f32-a830-7de5c0ba97e4")}
                </h2>
              </Link>
              <Link to="/aboutus">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("b6a7ca0b-ea62-4c4d-85e4-b3845d470b43")}
                </h2>
              </Link>
              <Link to="/aboutus">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("c75985c5-9e94-45f6-bad1-0c6dd98f5b38")}
                </h2>
              </Link>
            </div>
            <div className="text-center lg:text-left flex flex-col gap-y-2 text-[#111c7a]">
              <Link to="/contactus">
                <h1 className="text-[14px] lg:text-[20px] font-bold">
                  {t("fd6e4903-af3a-47b3-b3b4-b2a7d31c4c4d")}
                </h1>
              </Link>
              <Link to="/contactus">
                <h2 className="text-[10px] lg:text-[12px] ">
                  {t("c2491ab9-b4a8-48c1-a50f-5cd1421ae998")}
                </h2>
              </Link>
              <Link to="/contactus">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("98b1cfb6-8b47-4a00-adda-8d62b091fb5c")}
                </h2>
              </Link>
              <Link to="/contactus">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("0bc63594-ef10-4657-ac7a-47f9cbcb9f0c")}
                </h2>
              </Link>
            </div>
          </div>
          <div className="flex  justify-center mt-8 pb-8">
            <div className="text-center lg:text-left flex flex-col font-medium gap-y-4 text-[#111c7a]">
              <Link to="/operations">
                <h1 className="text-[14px] lg:text-[20px] font-bold">
                  {t("7a675048-ad00-4af9-b969-d2444b729fbb")}
                </h1>
              </Link>
              <Link to="/operations">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("311090b8-b8fa-4371-9a12-9fa6da98055d")}
                </h2>
              </Link>
              <Link to="/operations">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("dfe9ffd8-57f6-40a6-a08a-43740162c100")}
                </h2>
              </Link>
              <Link to="/operations">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("7bbe80ca-68c6-4a69-8673-0503fca9f235")}
                </h2>
              </Link>
              <Link to="/operations">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("01aab9bc-7bdc-43b3-ae77-7f8b6d9718b8")}
                </h2>
              </Link>
              <Link to="/operations">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("ce5001fd-0108-464a-acf5-e9bc6d68a55d")}
                </h2>
              </Link>
              <Link to="/operations">
                <h2 className="text-[10px] lg:text-[12px]">
                  {t("246449bc-c240-4116-a39f-34f422203e43")}
                </h2>
              </Link>
            </div>
          </div>
          <div className="mx-2 sm:ml-[5vh]">
            <div className="flex flex-col text-center lg:text-left lg:mt-[40px] text-[#111c7a] text-[20px] leading-7 font-bold pb-8">
              <h1>+987654321111</h1>
              <h1>info@fancystardiamonds.com</h1>
            </div>
          </div>
        </div>
        <div className=" flex justify-center bg-[#D2B976]">
          <div className="text-white cursor-pointer text-[8px] lg:text-[12px] flex py-4 gap-x-4 lg:gap-x-28">
            <h1>Fancystar diamond. Copyright © 2024</h1>
            <h1>Terms & Conditions</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
