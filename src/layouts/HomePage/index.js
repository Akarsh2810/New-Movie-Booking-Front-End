import { Button, Typography } from "@material-ui/core";
import BookingsTable from "../../components/BookingsTable";
import Header from "../../components/Header";
import browserHistory from "../../routes/history";
import {getSessionToken} from "../../utils/session";
import _ from "lodash";
import { useStyles } from "./styles";

const HomePage = () => {
    const classes = useStyles();

    if(_.isEmpty(getSessionToken("session_id"))) {
        browserHistory.push("/");
    }

    const handleClick = () => {
        browserHistory.push("/booking")
    }

    return (
        <div className={classes.layout}>
            <Header />
            <BookingsTable />
            <div className={classes.pos}>
                <Button onClick={handleClick}>
                    <Typography className={classes.booking}>BOOK YOUR MOVIE</Typography>
                </Button>
            </div>
        </div>
    )
}

export default HomePage;