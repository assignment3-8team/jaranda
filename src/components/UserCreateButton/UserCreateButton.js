import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

const UserCreateButton = props => {
  const userData = {
    menus: [],
    create: true,
  };

  const handleOnClickBtn = useCallback(() => {
    props.history.push({
      pathname: "/admin/table/create",
      state: userData,
    });
  }, [props.history, userData]);

  return (
    <button className="user-create-button" onClick={handleOnClickBtn}>
      <img alt="createUser" src="/assets/userPlus.svg" />
      <span>New</span>
    </button>
  );
};

export default withRouter(UserCreateButton);
