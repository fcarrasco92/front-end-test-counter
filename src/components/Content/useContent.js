import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useContent = () => {
  const [modalProps, setModalProps] = useState({
    showCreateContent: false,
    showDeleteContent: false,
  });
  const [copyShare, setCopyShare] = useState(false);
  const [search, setSearch] = useState("");
  const [contentListFilter, setContentListFilter] = useState([]);

  const {
    contentList,
    fetchContents,
    loading,
    hasError,
    showActions,
  } = useContext(ContentContext);

  useEffect(async () => {
    const data = await fetchContents();
    setContentListFilter(data);
  }, []);

  const modalCreateContent = () => {
    setModalProps({
      showCreateContent: !modalProps.showCreateContent,
    });
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      const dataFilter = contentList.filter((content) =>
        content.title.toLowerCase().includes(search.toLowerCase())
      );
      setContentListFilter(dataFilter);
    } else {
      setContentListFilter(contentList);
    }
  }, [search]);

  const showHideCopyShare = () => {
    setCopyShare(!copyShare);
  };

  const cleanSearch = () => {
    setSearch("");
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
    contentListFilter,
    cleanSearch,
  };
};

export default useContent;
