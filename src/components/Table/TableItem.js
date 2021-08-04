const TableItem = (props) => {
    const { userEmail, userName, createdDate } = props;

    return (
        <>
        <tr className='user-info-table-item'>
            <td>{userEmail}</td>
            <td>{userName}</td>
            <td>{createdDate}</td>
        </tr>
        </>
    )
}

export default TableItem;