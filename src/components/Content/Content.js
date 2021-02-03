import React from "react";
import Loading from "../UI/Loading/Loading";
import InputBox from "../UI/InputBox/InputBox";
import { Button, SIZES, STYLES } from "../UI/Button/Button";
import useContent from "./useContent";
import ListContent from "components/Content/ListContent/ListContent";
import Modal from "components/UI/Modal/Modal";
import closeIMG from "assets/images/close.svg";
import "./style.css";

const Content = () => {
  const {
    loading,
    dataContent,
    hasError,
    increaseCounter,
    decreaseCounter,
    modalProps,
    modalCreateContent,
  } = useContent();
  return (
    <div className="section-content">
      <InputBox />
      <div className="content-information">
        <div className="content-detail">
          {loading ? (
            <Loading />
          ) : (
            <ListContent
              contents={dataContent}
              hasError={hasError}
              increaseCounter={increaseCounter}
              decreaseCounter={decreaseCounter}
            />
          )}
        </div>
      </div>
      <hr />
      <div className="section-plus">
        <Button buttonSize={SIZES.small} onClick={modalCreateContent}>
          +
        </Button>
      </div>
      <div className="modal-section">
        <Modal show={modalProps.show} handleClose={modalCreateContent}>
          <div className="modal-content">
            <div className="header-modal">
              <div className="modal-close">
                <Button
                  type="button"
                  buttonStyle={STYLES.gray}
                  buttonSize={SIZES.circle}
                  onClick={modalCreateContent}
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
                  onClick={modalCreateContent}
                >
                  Save
                </Button>
              </div>
            </div>
            <hr />
            <div className="modal-content-main">
              <p>Name</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Content;
