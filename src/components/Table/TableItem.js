const TableItem = (props) => {
    const { userData } = props;

    return (
        <>
        <tr
        className='user-info-table-item'>
            <td>{userData.email}</td>
            <td>{userData.username}</td>
            <td>{userData.created_at.substring(0, 10)}</td>
        </tr>
        </>
    )
}

export default TableItem;