import React, { useState, useRef } from "react";
import Modal from "components/Modal/Modal";
import DaumPostcode from "./DaumPostcode";

function Address(props) {
  const { handleAddress } = props;
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const width = 500;
  const height = 600;

  const handleAddressComplete = (item) => {
    setAddress(item);
    console.log(address);
  };

  return (
    <div>
      <button onClick={toggleModal}>주소 검색</button>
      {isModalOpen && (
        <Modal handleModal={toggleModal}>modal 잘 되니...?</Modal>
      )}
    </div>
  );
}

export default Address;

/*
<DaumPostcode
            width={width}
            height={height}
            onComplete={handleAddressComplete}
          />
          */
