import './style.css';

const Header = (props) => {
    return (
        <header className='header'>
            <div className='nav-bar'>
                <div className='nav-contents'>
                    <div className='logo-circle'>
                        <img src='/assets/jarandaCircleLogo.png'/>
                    </div>
                    <div className='btn-wrap'>
                        <div className='my-name'>
                            <img src='/assets/userLogo.png'/>임시접속자
                        </div>
                        <div className='on-boarding'>
                            로그아웃
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;