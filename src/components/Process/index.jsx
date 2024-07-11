import React, { useState } from "react";
import line from "../../assets/line.svg";
import arrowlong from "../../assets/arrowlong.svg";
import earrings2 from "../../assets/earrings2.svg";
import process1 from "../../assets/process1.svg";
import VerticalSpacer from "../../components/VerticalSpacer";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    t("f16263fb-a1fa-48e8-b5f3-9c32ca51f225")
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  let numberText;
  if (selectedOption === t("eff4251f-70b4-43fc-82c5-23150c79ef08")) {
    numberText = "03";
  } else if (selectedOption === t("faef84cd-9307-45ff-9c63-21fa1127a912")) {
    numberText = "02";
  } else if (selectedOption === t("f16263fb-a1fa-48e8-b5f3-9c32ca51f225")) {
    numberText = "01";
  }
  console.log(selectedOption);

  return (
    <>
      <div>
        <div>
          <h1 className="text-[32px] md:text-[64px] text-center font-semibold text-[#111c7a]">
            {t("e68ee74d-c650-4bfb-b3a9-233d0a19dc6c")}
          </h1>
        </div>
        <div className="flex md:justify-center gap-x-2 scrollbar overflow-x-scroll ml-4 mt-4 pb-8 pr-4">
          <h1
            className={`border-[1px] cursor-pointer border-[#D8A99E] text-[14px] sm:text-[36px] whitespace-nowrap py-2 px-6 md:px-[60px] rounded-full ${
              selectedOption === "Manufacturing & Loose Diamonds"
                ? "bg-[#D8A99E] text-white"
                : "text-[#D8A99E]"
            }`}
            onClick={() =>
              handleOptionClick(t("f16263fb-a1fa-48e8-b5f3-9c32ca51f225"))
            }
          >
            {t("f16263fb-a1fa-48e8-b5f3-9c32ca51f225")}
          </h1>
          <h1
            className={`border-[1px] cursor-pointer border-[#D8A99E] text-[14px] sm:text-[36px] whitespace-nowrap py-2 px-6 md:px-[60px] rounded-full ${
              selectedOption === "Cutting & Polishing"
                ? "bg-[#D8A99E] text-white"
                : "text-[#D8A99E]"
            }`}
            onClick={() =>
              handleOptionClick(t("faef84cd-9307-45ff-9c63-21fa1127a912"))
            }
          >
            {t("faef84cd-9307-45ff-9c63-21fa1127a912")}
          </h1>
          <h1
            className={`border-[1px] border-[#D8A99E] cursor-pointer text-[14px] sm:text-[36px] whitespace-nowrap py-2 px-6 md:px-[60px] rounded-full ${
              selectedOption === "Sorting"
                ? "bg-[#D8A99E] text-white"
                : "text-[#D8A99E]"
            }`}
            onClick={() =>
              handleOptionClick(t("eff4251f-70b4-43fc-82c5-23150c79ef08"))
            }
          >
            {t("eff4251f-70b4-43fc-82c5-23150c79ef08")}
          </h1>
        </div>
        <div className="sm:grid sm:justify-center">
          <div className="flex gap-x-4 text-[32px] md:text-[64px] md:ml-[100px] md:py-10 font-semibold ml-8 text-[#D2B976]">
            <h2>{numberText}</h2>
            <img src={line} alt="line" className="w-[250px]" />
          </div>

          <div className="bg-[#D2B976] xl:h-[419px] w-[265px] md:w-[400px] xl:w-[650px] p-4 md:p-16 ml-4 md:ml-[100px] rounded-lg relative pb-[60px]">
            <h1 className="text-[#111c7a] text-[32px] md:text-[48px] font-semibold">
              {selectedOption}
            </h1>
            <h2 className="text-white mt-4 text-[12px] xl:w-[482px] md:text-[16px] leading-6">
              {selectedOption === t("eff4251f-70b4-43fc-82c5-23150c79ef08") &&
                t("02d83432-9fd9-4d96-803e-7f91bbb2cff9")}
              {selectedOption === t("faef84cd-9307-45ff-9c63-21fa1127a912") &&
                t("e99b8cc0-7d25-4cc5-8625-326517be0564")}
              {selectedOption === t("f16263fb-a1fa-48e8-b5f3-9c32ca51f225") &&
                t("560e7e9a-95c8-498b-bb3d-3e375fe424f3")}
            </h2>
          </div>
          <div>
            {/* <img
              src={process1}
              alt="process"
              className="z-[-1] ml-[100px] md:ml-[300px] xl:ml-[600px] xl:w-[600px] mt-[-50px] md:w-[400px]  xl:mt-[-550px] xl:h-[581px]"
            /> */}
            <img
              src={earrings2}
              alt="earrings"
              className="lg:w-[578px] lg:ml-[100px]"
            />
          </div>
        </div>
        <VerticalSpacer />
        <div className="flex justify-center my-8">
          <img src={arrowlong} className="md:w-[400px]" alt="arrow" />
        </div>
        <VerticalSpacer />
      </div>
    </>
  );
};

export default Process;
