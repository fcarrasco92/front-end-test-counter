import React from "react";
import Loading from "../UI/Loading/Loading";
import InputBox from "../UI/InputBox/InputBox";
import { Button, SIZES, STYLES } from "../UI/Button/Button";
import useContent from "./useContent";
import ListContent from "components/Content/ListContent/ListContent";
import CreateContent from "components/Content/CreateContent/CreateContent";
import Modal from "components/UI/Modal/Modal";
import deleteIcon from "assets/images/delete.svg";
import copyIcon from "assets/images/copy.svg";
import "./style.css";

const Content = () => {
  const {
    loading,
    contentList,
    hasError,
    modalProps,
    modalCreateContent,
    showActions,
    deleteCountersSelected,
  } = useContent();
  return (
    <div className="section-content">
      <InputBox />
      <div className="content-information">
        <div className="content-detail">
          {loading ? (
            <Loading />
          ) : (
            <ListContent contents={contentList} hasError={hasError} />
          )}
        </div>
      </div>
      <hr />
      <div className="section-content-actions">
        {showActions && (
          <>
            <div className="content-delete">
              <Button
                buttonSize={SIZES.small}
                buttonStyle={STYLES.secondary}
                onClick={deleteCountersSelected}
              >
                <img src={deleteIcon} alt="image delete" />
              </Button>
            </div>
            <div className="content-copy">
              <Button
                buttonSize={SIZES.small}
                buttonStyle={STYLES.secondary}
                onClick={() => alert("copy")}
              >
                <img src={copyIcon} alt="image delete" />
              </Button>
            </div>
          </>
        )}
        <div className="content-add">
          <Button buttonSize={SIZES.small} onClick={modalCreateContent}>
            +
          </Button>
        </div>
      </div>

      <div className="modal-section">
        <Modal show={modalProps.show}>
          <CreateContent handleClose={modalCreateContent} />
        </Modal>
      </div>
    </div>
  );
};

export default Content;
