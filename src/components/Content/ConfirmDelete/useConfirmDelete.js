import { useState, useEffect, useContext } from "react";
import { ContentContext } from "context/ContentContext";

const useConfirmDelete = ({ handleClose }) => {
  const { deleteCountersSelected } = useContext(ContentContext);
  const [error, setError] = useState(false);

  const deleteCounters = () => {
    try {
      deleteCountersSelected();
      handleClose();
    } catch (error) {
      setError(true);
    }
  };

  return {
    deleteCounters,
  };
};

export default useConfirmDelete;
