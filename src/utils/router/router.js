import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "pages/Home";
import Resister from "pages/Resister";
import Student from "pages/Student";
import Parent from "pages/Parent";
import Teacher from "pages/Teacher";
import Admin from "pages/Admin";


const router = () => {
    return (
        <>
            <Router>
                <Route exact path='/' component={Home}/>
                <Route exact path='/resister' component={Resister}/>
                <Route exact path='/student' component={Student}/>
                <Route exact path='/parent' component={Parent}/>
                <Route exact path='/teacher' component={Teacher}/>
                <Route exact path='/admin' component={Admin}/>
            </Router>
        </>
    )
}

export default router;