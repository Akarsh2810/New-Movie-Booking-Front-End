import { useStyles } from "./styles"
import Logout from "../Logout";
import { Typography, Box } from "@material-ui/core";
import {getSessionToken} from "../../utils/session";
import _ from "lodash";

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.layout}>
            <Box className={classes.movieName}>
                <Typography className={classes.movieStyle}>MOVIE BOOKING APP</Typography>
            </Box>
            {(!_.isEmpty(getSessionToken("session_id"))) && <Logout />}
        </div>
    )
}

export default Header;