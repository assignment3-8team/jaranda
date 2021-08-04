import React, { useState } from "react";

import InputInfo from "utils/commons/InputInfo";
import Modal from "components/Modal";
import { CREDITCARD_INPUT_ID, CREDITCARD_INPUT_NAME, CREDITCARD_INPUT_PLACEHOLDER, CREDITCARD_INPUT_TYPE } from "utils/constants/INPUT";
import { CREDITCARD_MODAL_HEIGHT, CREDITCARD_MODAL_WIDTH } from "utils/constants/POPUP_SIZE";

function CreditCard(props) {
  const { handleChange, creditcard } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="creditcard-input-wrapper">
      <div className="creditcard-input-show">{creditcard.length !== 0 ? creditcard : "카드 번호"}</div>
      <button type="button" className="creditcard-input-button" onClick={() => toggleModal()}>
        입력
      </button>
      <Modal show={isModalOpen} close={toggleModal} width={CREDITCARD_MODAL_WIDTH} height={CREDITCARD_MODAL_HEIGHT}>
        <InputInfo
          type={CREDITCARD_INPUT_TYPE}
          id={CREDITCARD_INPUT_ID}
          name={CREDITCARD_INPUT_NAME}
          placeholder={CREDITCARD_INPUT_PLACEHOLDER}
          handleChange={handleChange}
        />
        <button type="button" className="creditcard-popup-button" onClick={toggleModal}>
          입력
        </button>
      </Modal>
    </div>
  );
}

export default CreditCard;
