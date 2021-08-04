import React, { useState } from "react";

import InputInfo from "utils/commons/InputInfo";
import Modal from "components/Modal";
import {
  CREDITCARD_INPUT_ID,
  CREDITCARD_INPUT_NAME,
  CREDITCARD_INPUT_PLACEHOLDER,
  CREDITCARD_INPUT_TYPE,
} from "utils/constants/INPUT";

function CreditCard(props) {
  const { handleChange, creditcard } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="creditcard-input-wrapper">
      {creditcard.length !== 0 ? (
        <div className="creditcard-number-show">{creditcard}</div>
      ) : (
        "신용카드 번호"
      )}
      <button
        type="button"
        className="creditcard-input-button"
        onClick={() => toggleModal()}
      >
        신용카드 번호 입력
      </button>
      <Modal show={isModalOpen} close={toggleModal}>
        <InputInfo
          type={CREDITCARD_INPUT_TYPE}
          id={CREDITCARD_INPUT_ID}
          name={CREDITCARD_INPUT_NAME}
          placeholder={CREDITCARD_INPUT_PLACEHOLDER}
          handleChange={handleChange}
        />
        <button type="button" onClick={toggleModal}>
          입력
        </button>
      </Modal>
    </div>
  );
}

export default CreditCard;
