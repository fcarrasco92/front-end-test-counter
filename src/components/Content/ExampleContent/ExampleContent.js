import React from "react";
import { Button, STYLES, SIZES } from "components/UI/Button/Button";
import Pill from "components/UI/Pill/Pill";
import useExampleContent from "./useExampleContent";
import closeIMG from "assets/images/close.svg";
import "./style.css";

const ExampleContent = ({ handleClose }) => {
  const { selectExample, suggestedExamples } = useExampleContent({
    handleClose,
  });

  return (
    <div className="modal-content-example">
      <div className="header-modal-example">
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
        <div className="modal-title-example">
          <h3>Examples</h3>
        </div>
      </div>
      <hr />
      <div className="modal-content-main">
        <p className="content-paragraph">
          Select an example to add it to your counters.
        </p>

        {suggestedExamples &&
          suggestedExamples.map((suggestedExample) => {
            return (
              <div className="pill-examples">
                <p className="pill-section-title">{suggestedExample.section}</p>
                <div className="pill-section-detail">
                  {suggestedExample.examples &&
                    suggestedExample.examples.map((examples) => {
                      return (
                        <div className="example-suggest">
                          <Pill>
                            <Button
                              type="button"
                              buttonStyle={STYLES.generic}
                              buttonSize={SIZES.generic}
                              onClick={() => selectExample(examples.name)}
                            >
                              {examples.name}
                            </Button>
                          </Pill>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExampleContent;
