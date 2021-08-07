import React from "react";

import InputInfo from "utils/commons/InputInfo";
import { CREDITCARD_INPUT_ID, CREDITCARD_INPUT_NAME, CREDITCARD_INPUT_PLACEHOLDER, CREDITCARD_INPUT_TYPE } from "constants/INPUT";
import { CREDITCARD_MODAL_HEIGHT, CREDITCARD_MODAL_WIDTH } from "constants/POPUP_SIZE";
import { useModal } from "hooks/useModal";

function CreditCard(props) {
  const { value, handleChange, creditcard } = props;
  const [show, close, modalView] = useModal(CREDITCARD_MODAL_WIDTH, CREDITCARD_MODAL_HEIGHT);

  return (
    <div className="creditcard-input-wrapper">
      <div className="creditcard-input-show">{creditcard.length !== 0 ? creditcard : "카드 번호"}</div>
      <button type="button" className="creditcard-input-button" onClick={show}>
        입력
      </button>
      {modalView(
        <>
          <InputInfo
            type={CREDITCARD_INPUT_TYPE}
            id={CREDITCARD_INPUT_ID}
            value={value}
            placeholder={CREDITCARD_INPUT_PLACEHOLDER}
            handleChange={handleChange}
          />
          <button type="button" className="creditcard-popup-button" onClick={() => close()}>
            입력
          </button>
        </>,
      )}
    </div>
  );
}

export default CreditCard;
