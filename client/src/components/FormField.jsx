import React from 'react';

export default function FormField(props) {
  const { labelName, inputType, value, placeholder, handleChange, isTextarea } =
    props;
  return (
    <label className="flex flex-1 w-full flex-col">
      {labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}

      {isTextarea ? (
        <textarea
          type={inputType}
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input
          type={inputType}
          required
          value={value}
          onChange={handleChange}
          step={0.1}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
}
