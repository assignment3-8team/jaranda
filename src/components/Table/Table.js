import './style.css'
import TableItem from './TableItem';


const Table = (props) => {
    const { renderData } = props;

    return (
        <section className='user-info-table-wrap'>
            <table className='user-info-table'>
                <tbody>
                    <tr>
                        <th>email</th>
                        <th>name</th>
                        <th>created date</th>
                    </tr>
                    {renderData.map((e) => (
                        <TableItem
                        key={e.id} 
                        userData={e}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table;