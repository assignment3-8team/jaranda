import {
  ADDRESS_POPUP_HEIGHT,
  ADDRESS_POPUP_WIDTH,
} from "utils/constants/POPUP_SIZE";

function Address(props) {
  const { handleAddress, address } = props;

  const handleClick = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: (data) => {
          const toBuildingAddress = `${data.address} ${data.buildingName}`;
          handleAddress(toBuildingAddress);
        },
        onsearch: (data) => {
          console.log(data);
        },
        width: ADDRESS_POPUP_WIDTH,
        height: ADDRESS_POPUP_HEIGHT,
      });

      postcode.open({
        left: window.screen.width / 2 - ADDRESS_POPUP_WIDTH / 2,
        top: window.screen.height / 2 - ADDRESS_POPUP_HEIGHT / 2,
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
