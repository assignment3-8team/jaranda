import React from "react";

import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "components/SignUp/InputErrorMessge";
import { CREDITCARD_INPUT_NAME, CREDITCARD_INPUT_PLACEHOLDER, CREDITCARD_INPUT_TYPE } from "constants/INPUT";
import { CREDITCARD_MODAL_HEIGHT, CREDITCARD_MODAL_WIDTH } from "constants/POPUP_SIZE";
import { useModal } from "hooks/useModal";

function CreditCard(props) {
  const { value, onChange, errors } = props;
  const [show, close, modalView] = useModal(CREDITCARD_MODAL_WIDTH, CREDITCARD_MODAL_HEIGHT);

  return (
    <div className="creditcard-input-wrapper">
      <button type="button" className="creditcard-input-show" onClick={show}>
        {value || "카드 번호 입력"}
      </button>
      <InputErrorMessage errors={errors} name={CREDITCARD_INPUT_NAME} />
      {modalView(
        <>
          <InputInfo
            name={CREDITCARD_INPUT_NAME}
            onChange={onChange}
            value={value}
            placeholder={CREDITCARD_INPUT_PLACEHOLDER}
            type={CREDITCARD_INPUT_TYPE}
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
