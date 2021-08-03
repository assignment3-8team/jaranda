function DaumPostcode(props) {
  const handleClick = () => {
    const width = 500;
    const height = 600;
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(`${data.address} ${data.buildingName}`);
        },
        onsearch: (data) => {
          console.log(data);
        },
        width: width,
        height: height,
      });

      postcode.open({
        left: window.screen.width / 2 - width / 2,
        top: window.screen.height / 2 - height / 2,
        popupName: "addressPopup",
      });
    });
  };
  /*
  const script = document.createElement("script");
  script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  script.onload = () => document.body.appendChild(script);
*/
  return (
    <div className="daum">
      <button onClick={handleClick}>주소 검색</button>
    </div>
  );
}

export default DaumPostcode;
