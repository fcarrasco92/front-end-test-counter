import React from "react";
import { Button, STYLES } from "components/UI/Button/Button";
import useCopyContent from "./useCopyContent";
import "./style.css";

const CopyContent = () => {
  const { copyCountersSelected, countSelected } = useCopyContent();
  return (
    <div className="copy-content-container">
      <div className="copy-content-form">
        <div className="copy-content-title">Share {countSelected} counter</div>
        <div className="copy-content-button">
          <Button buttonStyle={STYLES.secondary} onClick={copyCountersSelected}>
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CopyContent;
