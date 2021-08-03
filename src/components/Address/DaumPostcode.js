import React, { useRef, useEffect } from "react";

const DaumPostcode = (props) => {
  const { width, height, onComplete } = props;
  const wrap = useRef();

  const initiate = () => {
    window.daum.postcode.load(() => {
      const Postcode = new window.daum.Postcode({
        oncomplete: function oncomplete(data) {
          onComplete(data);
        },
        height: height,
        width: width,
      });

      Postcode.embed(wrap, {});
    });
  };

  useEffect(() => {
    initiate();
  }, []);

  return <div ref={wrap}>wrap</div>;
};

export default DaumPostcode;
