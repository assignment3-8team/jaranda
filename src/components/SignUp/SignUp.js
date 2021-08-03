import React, { useState } from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Address from "components/Address/Address";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Modal from "components/Modal";
import DaumPostcode from "components/Address/DaumPostcode";

function SignUp(props) {
  const {
    handleEmail,
    handlePassword,
    handleRePassword,
    handleName,
    handleCreditcard,
    handleSubmit,
    handleAddress,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const width = 400;
  const height = 600;

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <form className="signup-form">
      <Email handleChange={handleEmail} />
      <Password handleChange={handlePassword} />
      <RePassword handleChange={handleRePassword} />
      <Name handleChange={handleName} />
      <button type="button" onClick={() => toggleModal()}>
        {isModalOpen ? "close modal" : "open modal"}
      </button>
      <DaumPostcode />
      <Modal show={isModalOpen} close={toggleModal}>
        <CreditCard handleChange={handleCreditcard} />
      </Modal>

      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default SignUp;
