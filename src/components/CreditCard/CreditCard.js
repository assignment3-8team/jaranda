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
  const { handleChange } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <button type="button" onClick={() => toggleModal()}>
        신용카드 번호 입력
      </button>
      <Modal show={isModalOpen} close={toggleModal}>
        <label htmlFor={CREDITCARD_INPUT_ID}>
          <InputInfo
            type={CREDITCARD_INPUT_TYPE}
            id={CREDITCARD_INPUT_ID}
            name={CREDITCARD_INPUT_NAME}
            placeholder={CREDITCARD_INPUT_PLACEHOLDER}
            handleChange={handleChange}
          />
        </label>
      </Modal>
    </>
  );
}

export default CreditCard;
