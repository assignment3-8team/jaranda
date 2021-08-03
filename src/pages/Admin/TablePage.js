import './style.css'
import Table from 'components/Table';

const TablePage = (props) => {
    return (
        <section>
            <header className="admin-header">
                <span>관리자 페이지</span>
                <span>admin menu</span>
            </header>
            <Table/>
        </section>
    )
}

export default TablePage;