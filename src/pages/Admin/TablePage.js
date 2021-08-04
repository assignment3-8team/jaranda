import { useState } from 'react';
import './style.css'
import Table from 'components/Table';
import Pagination from 'components/Pagination';
import userData from 'mockup/userData';

const TablePage = (props) => {

    const [pageIndex, setPageIndex] = useState(1);
    const maxIndex = Math.ceil(userData.length / 6);
    const dataStartIndex = (pageIndex - 1) * 6; 
    const renderData = userData.slice(dataStartIndex, dataStartIndex + 6);

    return (
        <section>
            <header className="admin-header">
                <span>관리자 페이지</span>
                <span>admin menu</span>
            </header>
            <Table renderData={renderData} />
            <Pagination maxIndex={maxIndex} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
        </section>
    )
}

export default TablePage;