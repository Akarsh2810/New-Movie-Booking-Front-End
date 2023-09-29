import Header from "../../components/Header";
import browserHistory from "../../routes/history";
import {getSessionToken} from "../../utils/session";
import _ from "lodash";

const BookingPage = () => {

    if(_.isEmpty(getSessionToken("session-id"))) {
        browserHistory.push("/");
    }
    return (
        <Header />
    )
}

export default BookingPage;