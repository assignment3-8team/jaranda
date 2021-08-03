import './style.css'
import userData from 'mockup/userData.js';
import TableItem from './TableItem';
import { useState } from 'react';

const Table = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const maxIndex = Math.ceil(userData.length / 6);
    const dataStartIndex = (pageIndex - 1) * 6; 
    const renderData = userData.slice(dataStartIndex, dataStartIndex + 6);
    console.log(renderData);

    return (
        <table className='user-info-table'>
            <tbody>
                <tr>
                    <th>email</th>
                    <th>name</th>
                    <th>created date</th>
                </tr>
                {renderData.map((e, i) => (
                    <TableItem
                    key={e.user_id} 
                    userEmail={e.user_email}
                    userName={e.user_name}
                    createdDate={e.created_date}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table;