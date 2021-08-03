import React, { useEffect } from "react";
import ReactDOM, { createPortal } from "react-dom";

const Modal = (props) => {
  const { show, close } = props;

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modal-dimmer" onClick={() => close()}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            this is modal
          </div>
        </div>
      ) : null}
    </>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
