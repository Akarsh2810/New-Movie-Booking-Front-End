import _ from "lodash";
import browserHistory from "./history";
import {Router, Switch, Route} from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import HomePage from "../layouts/HomePage";
import BookingPage from "../layouts/BookingPage";
import Error404 from "../utils/Error404";
import { getSessionToken} from "../utils/session";

const Routes = () => {
    if(window.location.pathname === "/") {
        if(!_.isEmpty(getSessionToken("session_id"))) {
            browserHistory.push("/home");
        }
    }
    return (
        <Router history = {browserHistory}>
            <Switch>
                <Route exact path = "/" component = {LandingPage}/>
                <Route exact path = "/home" component = {HomePage}/>
                <Route exact path = "/booking" component = {BookingPage}/>
                <Route component = {Error404} />
            </Switch>
        </Router>
    )
}

export default Routes;