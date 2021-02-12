import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useCreateContent = () => {
  const [nameContent, setNameContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [btnCreateDisabled, setBtnCreateDisabled] = useState(true);
  const [modalProps, setModalProps] = useState({
    showExampleContent: false,
  });
  const { saveCounter, exampleText } = useContext(ContentContext);
  useEffect(() => {
    setNameContent(exampleText);
  }, [exampleText]);

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
    setIsLoading(false);
  };

  const modalExampleContent = () => {
    setModalProps({
      showExampleContent: !modalProps.showExampleContent,
    });
  };

  return {
    nameContent,
    onNameContentChange,
    btnCreateDisabled,
    isLoading,
    saveContentCounter,
    modalProps,
    modalExampleContent,
  };
};

export default useCreateContent;
