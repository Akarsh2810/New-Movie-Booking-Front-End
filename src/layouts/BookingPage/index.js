import Header from "../../components/Header";
import browserHistory from "../../routes/history";
import {getSessionToken} from "../../utils/session";
import _ from "lodash";
import BookMovie from "../../components/BookMovie";

const BookingPage = () => {

    if(_.isEmpty(getSessionToken("session_id"))) {
        browserHistory.push("/");
    }
    return (
        <div>
            <Header />
            <BookMovie />
        </div>
    )
}

export default BookingPage;