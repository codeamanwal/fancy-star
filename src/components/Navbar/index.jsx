import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import close from "../../assets/close.svg";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#0A0E25] flex items-center justify-between md:justify-around">
      <div className="hidden md:flex gap-x-8 text-white font-semibold text-[16px]">
        <Link to="/">
          <div>{t("8c16f2e1-43c2-45c3-a7b3-c7766d97d395")}</div>
        </Link>
        <Link to="/aboutus">
          <div>{t("81249cde-3fbe-4379-a1a1-b3fee75eafed")}</div>
        </Link>
        <Link to="/operations">
          <div>{t("7a675048-ad00-4af9-b969-d2444b729fbb")}</div>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={logo} className=" lg:h-[150px]" />
        </Link>
      </div>
      <div className="hidden md:flex gap-x-8 text-white text-[16px] font-semibold">
        <Link to="/knowledge">
          <div>{t("44791d40-5b5f-418f-94c8-4d1340987e8f")}</div>
        </Link>
        <Link to="/contactus">
          <div>{t("0bc63594-ef10-4657-ac7a-47f9cbcb9f0c")}</div>
        </Link>
        <select
          className="bg-[#0a0e25]"
          onChange={changeLanguage}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="russ">Russian</option>
          <option value="turkish">Turkish</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        <img src={menu} className="h-[20px] pr-4" />
      </div>
      {isMenuOpen && (
        <div className="fixed scrollbar inset-0 bg-black bg-opacity-50 z-50">
          <div className="scrollbar sm:hidden bg-[#0A0E25] h-[100vh] overflow-hidden w-[100vw] transition-transform duration-[2000] ease-in-out">
            <div className="flex justify-between">
              <img src={logo} />
              <img src={close} onClick={toggleMenu} className="mr-4" />
            </div>

            <div className="flex flex-col items-center mt-16">
              <Link
                to="/"
                className="text-white font-semibold text-[16px] py-4"
              >
                {t("8c16f2e1-43c2-45c3-a7b3-c7766d97d395")}
              </Link>
              <Link
                to="/aboutus"
                className="text-white font-semibold text-[16px] py-4"
              >
                {t("81249cde-3fbe-4379-a1a1-b3fee75eafed")}
              </Link>
              <Link
                to="/operations"
                className="text-white font-semibold text-[16px] py-4"
              >
                {t("7a675048-ad00-4af9-b969-d2444b729fbb")}
              </Link>
              <Link
                to="/knowledge"
                className="text-white font-semibold text-[16px] py-4"
              >
                {t("44791d40-5b5f-418f-94c8-4d1340987e8f")}
              </Link>
              <Link
                to="/contactus"
                className="text-white font-semibold text-[16px] py-4"
              >
                {t("0bc63594-ef10-4657-ac7a-47f9cbcb9f0c")}
              </Link>

              <div className="text-white cursor-pointer font-semibold text-[16px] py-4">
                <select
                  className="bg-[#0a0e25] cursor-pointer"
                  onChange={changeLanguage}
                  value={i18n.language}
                >
                  <option value="en">English</option>
                  <option value="russ">Russian</option>
                  <option value="turkish">Turkish</option>
                  <option value="arabic">Arabic</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
