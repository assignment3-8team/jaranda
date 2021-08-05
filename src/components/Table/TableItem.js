import { withRouter } from "react-router-dom";
import { UserContainer } from "container/User";

const TableItem = props => {
  const { userData } = props;
  const history = props.history;
  const { userInfo } = UserContainer.useContainer();

  console.log("userInfo", userInfo);
  const _handleOnClick = () => {
    history.push({
      pathname: `/admin/table/${userData.id}`,
      state: userData,
    });
  };

  return (
    <tr onClick={_handleOnClick} className="user-info-table-item">
      <td>{userData.email}</td>
      <td>{userData.username}</td>
      <td>{userData.created_at.substring(0, 10)}</td>
    </tr>
  );
};

export default withRouter(TableItem);
