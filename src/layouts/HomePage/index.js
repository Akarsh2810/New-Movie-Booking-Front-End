import { Button, Box } from "@material-ui/core";
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
            <Box className={classes.submitWrapper}>
                <Button className={classes.submit}
                    type = "submit"
                    onClick={handleClick}
                >
                    BOOK YOUR MOVIE
                </Button>
            </Box>
        </div>
    )
}

export default HomePage;