function Address(props) {
  const { handleAddress, address } = props;

  const handleClick = () => {
    const width = 500;
    const height = 600;
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: (data) => {
          const toBuildingAddress = `${data.address} ${data.buildingName}`;
          handleAddress(toBuildingAddress);
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

  return (
    <div className="address-input-wrapper">
      {address.length !== 0 ? (
        <div className="address-show">{address}</div>
      ) : (
        "주소"
      )}
      <button
        type="button"
        className="address-input-button"
        onClick={handleClick}
      >
        주소 검색
      </button>
    </div>
  );
}

export default Address;
