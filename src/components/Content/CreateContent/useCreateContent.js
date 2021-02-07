import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useCreateContent = () => {
  const [nameContent, setNameContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [btnCreateDisabled, setBtnCreateDisabled] = useState(true);
  const { saveCounter } = useContext(ContentContext);

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

  const saveContentCounter = async () => {
    setIsLoading(true);
    setNameContent("");
    const contentSavedResponse = await saveCounter({ title: nameContent });
    console.log("contentSavedResponse ==> ", contentSavedResponse);
    setIsLoading(false);
  };

  return {
    nameContent,
    onNameContentChange,
    btnCreateDisabled,
    isLoading,
    saveContentCounter,
  };
};

export default useCreateContent;
