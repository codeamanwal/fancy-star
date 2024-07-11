import React, { useState } from "react";
import InputField from "../InputField";
import { useTranslation } from "react-i18next";

const Label = ({ text, className }) => {
  return (
    <h4 className="text-[#111c7a] mt-4 lg:mt-8 text-[10px] md:text-[16px] font-semibold">
      {text}
    </h4>
  );
};

const Form = () => {
  const { t } = useTranslation();
  const initialFormData = {
    name: "",
    email: "",
    number: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch(
      "https://api.sheetmonkey.io/form/4QRU5RFcJzbjuhytgcFoQJ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setIsSubmitting(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setFormData(initialFormData);
      }, 2000); // Hide success message and reset form after 2 seconds
    } else {
      setIsSubmitting(false);
      // Handle error
      console.error("Form submission failed:", response.status);
    }
  };

  return (
    <div className="flex flex-col px-4 py-8 text-[10px] md:text-[16px]">
      <h2 className="text-[#555970] lg:mt-8">
        {t("70611177-65cb-4920-8438-f542cc76990f")}
      </h2>
      <form onSubmit={handleSubmit} className="lg:mt-8">
        <Label text={t("167b2158-ba43-4448-a844-8df73136ae1e")} />
        <InputField
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t("d7ecf2f6-ad51-4709-bd5a-d378de369b01")}
        />
        <Label text={t("22640c52-9189-4e9f-8e42-4d151805ae7d")} />
        <InputField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t("b1fbd9dd-bd38-4a3b-b2a4-671f43f28f67")}
        />
        <Label text={t("2ae20dfe-790a-4895-9695-8986ec332390")} />
        <InputField
          type="number"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          placeholder={t("0f0da383-ae00-4197-940d-78772a8eac02")}
        />
        <Label text={t("2135f38d-2ecf-4787-904a-ac85700d35b2")} />
        <InputField
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder={t("e729ce17-644e-49e6-8b8f-842dcf810b13")}
        />

        <button
          type="submit"
          className="mt-4 p-2 px-4 bg-[#1328A3] text-white rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t("Loading...")
            : t("f156a4f6-76c4-431c-a64b-3dc8f9294700")}
        </button>
      </form>
      {showSuccessMessage && (
        <div className="mt-4 text-center">
          {t("Thank you for your response!")}
        </div>
      )}
    </div>
  );
};

export default Form;
