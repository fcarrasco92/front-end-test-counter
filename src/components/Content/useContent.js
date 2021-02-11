import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useContent = () => {
  const [modalProps, setModalProps] = useState({
    showCreateContent: false,
    showDeleteContent: false,
  });
  const [copyShare, setCopyShare] = useState(false);
  const [search, setSearch] = useState("");

  const {
    contentList,
    fetchContents,
    loading,
    hasError,
    showActions,
  } = useContext(ContentContext);

  useEffect(() => {
    fetchContents();
  }, []);

  const modalCreateContent = () => {
    setModalProps({
      showCreateContent: !modalProps.showCreateContent,
    });
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const showHideCopyShare = () => {
    setCopyShare(!copyShare);
  };

  const modalConfirmDelete = () => {
    setModalProps({
      showDeleteContent: !modalProps.showDeleteContent,
    });
  };

  return {
    loading,
    contentList,
    hasError,
    modalProps,
    modalCreateContent,
    showActions,
    copyShare,
    showHideCopyShare,
    modalConfirmDelete,
    search,
    handleOnChange,
  };
};

export default useContent;
