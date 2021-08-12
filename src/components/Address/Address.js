import { ADDRESS_POPUP_HEIGHT, ADDRESS_POPUP_WIDTH } from "constants/POPUP_SIZE";
import { ADDRESS_INPUT_TYPE } from "constants/INPUT";
import InputInfo from "utils/commons/InputInfo";

function Address(props) {
  const { handleAddress, address } = props;

  const handleClick = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: data => {
          const toBuildingAddress = `${data.address} ${data.buildingName}`;
          handleAddress(toBuildingAddress);
        },
        onsearch: data => {
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
      <button type="button" className="address-show" onClick={handleClick}>
        {address || "주소 입력"}
      </button>
    </div>
  );
}

export default Address;
