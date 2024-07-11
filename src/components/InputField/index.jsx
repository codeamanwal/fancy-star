import React from "react";

const InputField = ({
  type,
  placeholder,
  required,
  name,
  value,
  error,
  touched,
  onChange,
  ...rest
}) => {
  const inputClassName = `input border-[#979CB6] mt-2  border-[1px]  text-[#111c72] placeholder:text-[#979CB6] lg:placeholder:text-[#979CB6] placeholder:text-[10px] p-2 w-[270px] lg:w-[470px] lg:h-[46px] rounded-md h-[30px] bg-[white] ${
    !error && touched
      ? "border-[white] text-[white]"
      : error && touched
      ? "border-[#ff0000]"
      : "border-[#888888]"
  }`;

  return (
    <>
      <input
        id={name}
        className={inputClassName}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && touched ? (
        <p className="text-[#ff0000] absolute text-[10px]  md:pt-2 pl-1">
          {error}
        </p>
      ) : null}
    </>
  );
};

export default InputField;
