import _ from "lodash";
import browserHistory from "./history";
import {Router, Switch, Route} from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import HomePage from "../layouts/HomePage";

const Routes = () => {
    if(window.location.pathname === "/") {
        if(!_.isEmpty(sessionStorage.getItem("session-id"))) {
            browserHistory.push("/home");
        }
    }
    return (
        <Router history = {browserHistory}>
            <Switch>
                <Route exact path = "/" component = {LandingPage}/>
                <Route exact path = "/home" component = {HomePage}/>
            </Switch>
        </Router>
    )
}

export default Routes;