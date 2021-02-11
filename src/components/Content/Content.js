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
import CopyContent from "./CopyContent/CopyContent";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import ShowDetail from "./ShowDetail/ShowDetail";
import "./style.css";

const Content = () => {
  const {
    loading,
    contentList,
    hasError,
    modalProps,
    modalCreateContent,
    showActions,
    copyShare,
    showHideCopyShare,
    modalConfirmDelete,
  } = useContent();
  const { showCreateContent, showDeleteContent } = modalProps;

  return (
    <div className="section-content">
      <InputBox />
      <div className="detail-information">
        <ShowDetail />
      </div>
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
                onClick={modalConfirmDelete}
              >
                <img src={deleteIcon} alt="image delete" />
              </Button>
            </div>
            <div className="content-copy">
              <Button
                buttonSize={SIZES.small}
                buttonStyle={STYLES.secondary}
                onClick={showHideCopyShare}
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
      {copyShare && <CopyContent />}

      <div className="modal-section">
        <Modal show={showCreateContent}>
          <CreateContent handleClose={modalCreateContent} />
        </Modal>
      </div>
      <div className="modal-delete">
        <Modal show={showDeleteContent}>
          <ConfirmDelete handleClose={modalConfirmDelete} />
        </Modal>
      </div>
    </div>
  );
};

export default Content;
