import { ManageMenu } from "components/ManageMenu/ManageMenu";

const UserInfoPage = props => {
  return (
    <div>
      <ManageMenu userData={props.location.state} />
    </div>
  );
};

export default UserInfoPage;
