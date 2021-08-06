import { Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Register from "pages/Register";
import Student from "pages/Student";
import Parent from "pages/Parent";
import Teacher from "pages/Teacher";
import { TablePage, UserInfoPage } from "pages/Admin";
import { page404 } from "pages/page404";
import RouteIf from './RouteIf';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <RouteIf exact path="/student" targetMenu="student_menu" component={Student} />
      <RouteIf exact path="/parent" targetMenu="parent_menu" component={Parent} />
      <RouteIf exact path="/teacher" targetMenu="teacher_menu" component={Teacher} />
      <RouteIf exact path="/admin/table" targetMenu="admin_menu" component={TablePage} />
      <RouteIf exact path="/admin/table/:id" targetMenu="admin_menu" component={UserInfoPage} />
      <Route exact path="/" component={Home} />
      <Route component={page404} />
    </Switch>
  );
};

export default Router;
