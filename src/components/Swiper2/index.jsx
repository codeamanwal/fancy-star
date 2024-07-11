import React, { useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, A11y } from "swiper/modules";
import VerticalSpacer from "../VerticalSpacer";
import { useTranslation } from "react-i18next";
import comma from "../../assets/comma.svg";
const PrevBtn = () => {
  return (
    <button className="flex justify-center items-center h-[24px] w-[24px] prev-btn rounded-full border-[#111C7A] border-[1px] z-[99999] rotate-[-180deg] md:h-[50px] md:w-[50px]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.88653 4.04167L4.68475 0.914296M7.88653 4.04167L4.75915 7.24344M7.88653 4.04167L0.502522 4.12847"
          stroke="#111C7A"
          strokeWidth="0.712042"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const NextBtn = () => {
  return (
    <button className="flex justify-center items-center border-[#111C7A] border-[1px] h-[24px] w-[24px] next-btn rounded-full   z-[99999] md:h-[50px] md:w-[50px]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.88653 4.04167L4.68475 0.914296M7.88653 4.04167L4.75915 7.24344M7.88653 4.04167L0.502522 4.12847"
          stroke="#111C7A"
          strokeWidth="0.712042"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const Swiper2 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-[32px] md:text-[64px] text-[#111c72] lg:w-[900px] font-semibold mx-auto text-center">
        {t("946520f1-1e27-4733-9b53-90e424bb6625")}
      </h1>
      <VerticalSpacer />
      <div className="">
        <Swiper
          className="md:w-[500px] mx-auto"
          spaceBetween={30}
          modules={[Navigation, A11y]}
          grabCursor={false}
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
        >
          <SwiperSlide className="w-[310px] lg:w-[600px] lg:h-[400px] relative text-[white] p-16 flex flex-col text-left justify-center items-center rounded-lg h-[228px] bg-[#A9C4C9]">
            <h2>{t("cb4970ca-c45b-4219-a818-e61d0555299d")}</h2>
            <h2 className="pt-4">
              {t("09bb017d-aa59-4853-b0c6-28bc33e6f2af")}
            </h2>
            <img
              src={comma}
              className="absolute w-[50px] sm:w-[100px] bottom-2 right-2"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[310px] lg:w-[600px] lg:h-[400px] relative text-[white] p-16 flex flex-col text-left justify-center items-center rounded-lg h-[228px] bg-[#A9C4C9]">
            <h2>{t("cb4970ca-c45b-4219-a818-e61d0555299d")}</h2>
            <h2 className="pt-4">
              {t("09bb017d-aa59-4853-b0c6-28bc33e6f2af")}
            </h2>
            <img
              src={comma}
              className="absolute w-[50px] sm:w-[100px] bottom-2 right-2"
            />
          </SwiperSlide>
          <SwiperSlide className="w-[310px] lg:w-[600px] lg:h-[400px] relative text-[white] p-16 flex flex-col text-left justify-center items-center rounded-lg h-[228px] bg-[#A9C4C9]">
            <h2>{t("cb4970ca-c45b-4219-a818-e61d0555299d")}</h2>
            <h2 className="pt-4">
              {t("09bb017d-aa59-4853-b0c6-28bc33e6f2af")}
            </h2>
            <img
              src={comma}
              className="absolute w-[50px] sm:w-[100px] bottom-2 right-2"
            />
          </SwiperSlide>

          <div className="flex w-[100px] md:w-[150px] mt-8 justify-between mx-auto">
            <PrevBtn />
            <NextBtn />
          </div>
        </Swiper>
      </div>
      <VerticalSpacer />
    </div>
  );
};

export default Swiper2;
