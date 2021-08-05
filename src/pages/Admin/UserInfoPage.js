import { ManageMenu } from "components/ManageMenu/ManageMenu";

const UserInfoPage = props => {
  console.log(props.location.state);
  return (
    <div>
      <ManageMenu userData={props.location.state} />
    </div>
  );
};

export default UserInfoPage;
