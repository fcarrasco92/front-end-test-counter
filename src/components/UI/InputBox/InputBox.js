import React from "react";

const InputBox = ({ onChange, placeholder, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      ></input>
    </div>
  );
};

export default InputBox;
