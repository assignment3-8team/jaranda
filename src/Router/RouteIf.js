import { UserContainer } from "container/User"
import { Route } from "react-router-dom";
import './style.css';

const RouteIf = ({ targetMenu, component: Component, ...rest }) => {

    const { userInfo } = UserContainer.useContainer();
    const allowedMenus = userInfo?.menus.map((e) => e.menu_name);

    return (
      <Route
        {...rest}
        render={props => {
          if ((targetMenu !== "admin_menu" && !allowedMenus?.includes(targetMenu))
                || (targetMenu === "admin_menu" && !userInfo?.is_admin)) {
            return (
                <div className='forbidden-page'>
                    <img alt="forbidden" src='/assets/forbiddenPage.svg'/>
                </div>
            )
          }
  
          if (Component) {
            return <Component {...props}/>
          }
  
          return null
        }}
      />
    )
  }

export default RouteIf;