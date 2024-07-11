import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VerticalSpacer from "../VerticalSpacer";
import { useTranslation } from "react-i18next";

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

const Collection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1 className="text-[32px] md:text-[64px] text-center font-semibold text-[#111c7a]">
          {t("937c939e-845e-4511-92f5-000156d5cb02")}
        </h1>
        <h2 className="text-[#111c7a] mt-8 sm:mt-16 text-center w-[90%] mx-auto">
          In a nutshell, our focus revolves around cultivating strong
          relationships and alignment with our clients. To meet their specific
          requirements, we channel our efforts into crafting exquisite jewelry
          pieces. Our extensive and adaptable inventory allows us not only to
          offer diamonds at competitive prices but also to expertly set them
          into unique jewelry creations. Our team comprises individuals with
          diverse skills, backgrounds in technology and management expertise. We
          strive to create innovative products for an increasingly diverse
          clientele by harnessing the varied talents, ideas and perspectives
          within our team.
        </h2>
        <VerticalSpacer />
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, A11y]}
          loop={true}
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 50,
            stretch: 5,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="w-[360px] xl:w-[1100px] 2xl:w-[1400px] mx-auto"
        >
          <div className="w-[360px] mx-auto">
            <SwiperSlide>
              <img src="./slider/1.svg" className="w-full  rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slider/2.svg" className="w-full  rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slider/4.svg" className="w-full  rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slider/4.svg" className="w-full  rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slider/5.svg" className="w-full  rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slider/5.svg" className="w-full rounded-lg" />
            </SwiperSlide>
          </div>
          <VerticalSpacer />
          <div className="flex w-[100px] md:w-[150px] justify-between mx-auto">
            <PrevBtn />
            <NextBtn />
          </div>
        </Swiper>
      </div>
      <VerticalSpacer />
      <VerticalSpacer />
    </>
  );
};

export default Collection;
