import "./style.css";
import { useModal } from "components/Modal/useModal";
import { Login } from "components/Login";
const Header = props => {
  const [show, close, modalView] = useModal();
  return (
    <>
      <header className="header">
        <div className="nav-bar">
          <div className="nav-contents">
            <div className="logo-circle">
              <img src="/assets/jarandaCircleLogo.png" />
            </div>
            <div className="btn-wrap">
              <div className="my-name">
                <img src="/assets/userLogo.png" />
                임시접속자
              </div>
              <div>
                <button
                  onClick={() => {
                    show();
                  }}
                >
                  로그인
                </button>
              </div>
              <div className="on-boarding">로그아웃</div>
            </div>
          </div>
        </div>
      </header>
      {modalView(<Login close={() => close()}></Login>)}
    </>
  );
};

export default Header;
