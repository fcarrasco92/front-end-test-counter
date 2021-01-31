import React from "react";

const InputBox = ({ onChange, placeholder }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default InputBox;
