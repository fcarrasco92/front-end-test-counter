import React from "react";

const InputBox = ({ icon = "", onChange, placeholder, value }) => {
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
      />
      {icon && (
        <button type="submit">
          <img
            src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Crystal_Clear_action_viewmag.png/16px-Crystal_Clear_action_viewmag.png"
            alt="Search"
          />
        </button>
      )}
    </div>
  );
};

export default InputBox;
