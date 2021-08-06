import { Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Register from "pages/Register";
import Student from "pages/Student";
import Parent from "pages/Parent";
import Teacher from "pages/Teacher";
import { TablePage, UserInfoPage } from "pages/Admin";
import { page404 } from "pages/page404";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/student" component={Student} />
      <Route exact path="/parent" component={Parent} />
      <Route exact path="/teacher" component={Teacher} />
      <Route exact path="/admin/table" component={TablePage} />
      <Route exact path="/admin/table/:id" component={UserInfoPage} />
      <Route exact path="/" component={Home} />
      <Route component={page404} />
    </Switch>
  );
};

export default Router;
