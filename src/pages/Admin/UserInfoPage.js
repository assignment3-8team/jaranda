import { ManageMenu } from "components/ManageMenu/ManageMenu";

const UserInfoPage = props => {
  const userData = props.location.state.menus;

  return (
    <div>
      {/*console.log(userData.menus)*/}
      <ManageMenu menus={userData} />
    </div>
  );
};

export default UserInfoPage;
