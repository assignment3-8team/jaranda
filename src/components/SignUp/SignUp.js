import React, { useState } from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Address from "components/Address/Address";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Modal from "components/Modal";

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

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <form className="signup-form">
      <Email handleChange={handleEmail} />
      <Password handleChange={handlePassword} />
      <RePassword handleChange={handleRePassword} />
      <Name handleChange={handleName} />
      <CreditCard handleChange={handleCreditcard} />
      <button type="button" onClick={() => toggleModal()}>
        {isModalOpen ? "close modal" : "open modal"}
      </button>
      <Modal show={isModalOpen} close={toggleModal} />

      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default SignUp;
