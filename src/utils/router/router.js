import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Register from "pages/Register";
import Student from "pages/Student";
import Parent from "pages/Parent";
import Teacher from "pages/Teacher";
import { TablePage, UserInfoPage, CreateByAdmin } from "pages/Admin";

const router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/student" component={Student} />
        <Route exact path="/parent" component={Parent} />
        <Route exact path="/teacher" component={Teacher} />
        <Route exact path="/admin/table" component={TablePage} />
        <Route exact path="/admin/table/:id" component={UserInfoPage} />
        <Route exact path="/admin/table/create" component={CreateByAdmin} />
        {/* TODO ErrorPage 만들기(선화) */}
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </Router>
  );
};

export default router;
