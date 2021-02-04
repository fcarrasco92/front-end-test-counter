import { useState, useEffect } from "react";

const useCreateContent = () => {
  const [nameContent, setNameContent] = useState("");
  const [btnCreateDisabled, setBtnCreateDisabled] = useState(true);

  useEffect(() => {
    if (nameContent === "") {
      setBtnCreateDisabled(true);
    } else {
      setBtnCreateDisabled(false);
    }
  }, [nameContent]);

  const onNameContentChange = (value) => {
    setNameContent(value);
  };

  return {
    nameContent,
    onNameContentChange,
    btnCreateDisabled,
  };
};

export default useCreateContent;
