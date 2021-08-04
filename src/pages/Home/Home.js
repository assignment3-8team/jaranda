import { UserContainer } from "container/User";

const Home = props => {
  const { logIn } = UserContainer.useContainer();
  return (
    <>
      <button onClick={logIn}>로그인</button>
    </>
  );
};

export default Home;
