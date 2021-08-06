import { withRouter } from "react-router-dom";
import { useCallback } from "react";

const TableItem = props => {
  const { userData } = props;
  const history = props.history;

  const _handleOnClick = useCallback(() => {
    history.push({
      pathname: `/admin/table/${userData.id}`,
      state: userData,
    });
  }, [history, userData]);

  return (
    <tr onClick={_handleOnClick} className="user-info-table-item">
      <td>{userData.email}</td>
      <td>{userData.username}</td>
      <td>{userData.created_at.substring(0, 10)}</td>
    </tr>
  );
};

export default withRouter(TableItem);
