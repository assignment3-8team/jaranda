import { useEffect, useState } from 'react';
import './style.css'
import Table from 'components/Table';
import Pagination from 'components/Pagination';
import postLogin from 'utils/apis/postLogin';
import getUsersInfo from 'utils/apis/getUsersInfo';

const TablePage = (props) => {

    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async() => {
        setIsLoading(true);
        const myInfo = await postLogin({
            "identifier":"admin1@naver.com",
            "password":"123123",
        });
        const usersDataRes = await getUsersInfo(myInfo.jwt)
        setUsersData(prevState => usersDataRes);
        setIsLoading(false);
    }, []);

    const [pageIndex, setPageIndex] = useState(1);
    const maxIndex = Math.ceil(usersData.length / 6);
    const dataStartIndex = (pageIndex - 1) * 6; 
    const renderData = usersData.slice(dataStartIndex, dataStartIndex + 6);

    return (
        <section>
            <header className="admin-header">
                <span>관리자 페이지</span>
                <span>admin menu</span>
            </header>
            {isLoading ? 
                <div className='loading-wrap'>
                    <img src='/assets/isLoading.gif'/>
                </div>
                :
                <>
                <Table renderData={renderData} />
                <Pagination maxIndex={maxIndex} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
                </>
            }
        </section>
    )
}

export default TablePage;