import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useExampleContent = ({ handleClose }) => {
  const [suggestedExamples, setSuggestedExamples] = useState([
    {
      section: "Drinks",
      examples: [
        {
          name: "Cups of coffee",
        },
        {
          name: "Glasses of water",
        },
        {
          name: "Martinis",
        },
      ],
    },
    {
      section: "Food",
      examples: [
        {
          name: "Hot-dogs",
        },
        {
          name: "Cupcakes eaten",
        },
        {
          name: "Chicken wings",
        },
      ],
    },
    {
      section: "Misc",
      examples: [
        {
          name: "Times sneezed",
        },
        {
          name: "Naps",
        },
        {
          name: "Day dreaming",
        },
      ],
    },
  ]);
  const { setExampleText } = useContext(ContentContext);
  const selectExample = (text) => {
    setExampleText(text);
    handleClose();
  };

  return {
    selectExample,
    suggestedExamples,
  };
};

export default useExampleContent;
