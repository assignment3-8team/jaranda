import "./style.css";
import { withRouter } from "react-router-dom";
import { useModal } from "hooks/useModal";
import { Login } from "components/Login";
import { UserContainer } from "container/User";



const Header = (props) => {

    const { userInfo, setUserInfo } = UserContainer.useContainer();
    
    const handleClickLogo = () => {
        props.history.push({
            pathname: '/',
        })
    }

    const handleClickLogout = () => {
        localStorage.removeItem("user")
        setUserInfo(prevState => null);
        props.history.push({
            pathname: '/',
        })
    }

    const handleClickSignUp = () => {
        props.history.push({
            pathname: '/register',
        })
    }


  const [show, close, modalView] = useModal();
  return (
    <>
      <header className="header">
        <div className="nav-bar">
          <div className="nav-contents">
            <div className="logo-circle">
              <img
              onClick={handleClickLogo} 
              alt='jarandaLogo'
              src="/assets/jarandaCircleLogo.png" />
            </div>
            <div className="btn-wrap">
                { userInfo ? 
                    <div className="my-name">
                        <img alt='userLogo' src="/assets/userLogo.png" />
                        {userInfo.username}
                    </div>
                    :
                    null
                }
              <div>

              </div>
              <div className="on-boarding">
                  { userInfo ? 
                    <button
                    onClick={handleClickLogout}
                    >로그아웃</button>
                    :
                    <>
                    <button
                    onClick={() => {show();}}
                    >
                    로그인
                    </button>
                    <button
                    onClick={handleClickSignUp}
                    >
                    회원가입
                    </button>
                    </>
                    }
                </div>
            </div>
          </div>
        </div>
      </header>
      {modalView(<Login close={() => close()}></Login>)}
    </>
  );
};

export default withRouter(Header);
