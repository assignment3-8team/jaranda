import React, { useEffect } from "react";
import ReactDOM, { createPortal } from "react-dom";

const Modal = (props) => {
  const { show, close, children, width, height } = props;

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modal-dimmer" onClick={() => close()}>
          <div
            className="modal-container"
            style={{ width: width, height: height }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
