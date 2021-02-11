import React from "react";
import { Button, STYLES } from "components/UI/Button/Button";
import useConfirmDelete from "./useConfirmDelete";
import "./style.css";

const ConfirmDelete = ({ handleClose }) => {
  const { error, deleteCounters } = useConfirmDelete({ handleClose });
  return (
    <div className="modal-confirm-delete">
      <h1>Delete</h1>
      <p>This cannot be undone.</p>
      <div className="delete-actions">
        <Button buttonStyle={STYLES.primary} onClick={handleClose}>
          Cancel
        </Button>
        <Button buttonStyle={STYLES.secondary} onClick={deleteCounters}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
