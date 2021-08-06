import { useEffect, useState } from "react";
import "./style.css";
import Table from "components/Table";
import Pagination from "components/Pagination";
import UserCreateButton from "components/UserCreateButton";
import Search from "components/Search";
import postLogin from "utils/apis/postLogin";
import getUsersInfo from "utils/apis/getUsersInfo";
import { UserContainer } from "container/User";


const TablePage = props => {
  const [usersData, setUsersData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = UserContainer.useContainer();

  useEffect(async () => {
    setIsLoading(true);
    const myInfo = await postLogin({
      identifier: "admin1@naver.com",
      password: "123123",
    });
    console.log(myInfo);
    const usersDataRes = await getUsersInfo(myInfo.jwt);
    setUsersData(prevState => usersDataRes);
    setSearchedData(prevState => usersDataRes);
    setIsLoading(false);
  }, []);

  const [pageIndex, setPageIndex] = useState(1);
  const maxIndex = Math.ceil(searchedData.length / 6);
  const dataStartIndex = (pageIndex - 1) * 6;
  const renderData = searchedData.slice(dataStartIndex, dataStartIndex + 6);

  return (
    <section>
      <header className="admin-header">
        <span>관리자 페이지</span>
        <span>admin menu</span>
        <div className="table-search">
            <Search baseData={usersData} setData={setSearchedData}/>
        </div>
      </header>
      {isLoading ? (
        <div className="loading-wrap">
          <img src="/assets/isLoading.gif" />
        </div>
      ) : (
        <>
          <Table renderData={renderData} />
          <Pagination maxIndex={maxIndex} pageIndex={pageIndex} setPageIndex={setPageIndex} />
          <div className="create-button-wrap">
            <UserCreateButton/>
          </div>
        </>
      )}
    </section>
  );
};

export default TablePage;
