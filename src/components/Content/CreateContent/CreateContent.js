import React from "react";
import { Button, SIZES, STYLES } from "components/UI/Button/Button";
import { Input, STYLES_INPUT } from "components/UI/Input/Input";
import useCreateContent from "./useCreateContent";
import closeIMG from "assets/images/close.svg";
import "./style.css";

const CreateContent = ({ handleClose }) => {
  const {
    nameContent,
    onNameContentChange,
    btnCreateDisabled,
  } = useCreateContent();
  return (
    <div className="modal-content">
      <div className="header-modal">
        <div className="modal-close">
          <Button
            type="button"
            buttonStyle={STYLES.gray}
            buttonSize={SIZES.circle}
            onClick={handleClose}
          >
            <img src={closeIMG} alt="image close" />
          </Button>
        </div>
        <div className="modal-title">
          <h3>Create counter</h3>
        </div>
        <div className="modal-save-content">
          <Button
            buttonSize={SIZES.small}
            buttonStyle={STYLES.primary}
            onClick={() => alert("HEllo")}
            disabled={btnCreateDisabled}
          >
            Save
          </Button>
        </div>
      </div>
      <hr />
      <div className="modal-content-main">
        <Input
          label="Name"
          id="nameContent"
          name="nameContent"
          placeholder="Cups of coffee"
          value={nameContent}
          inputStyle={STYLES_INPUT.primary}
          onChange={onNameContentChange}
        />
      </div>
    </div>
  );
};

export default CreateContent;
