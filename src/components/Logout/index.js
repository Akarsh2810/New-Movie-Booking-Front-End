import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles"
import { getSessionToken, removeSessionToken } from "../../utils/session";
import axios from "axios";
import browserHistory from "../../routes/history";

const Logout = () => {
    const classes = useStyles()

    const handleClick = () => {
        const url = `http://localhost:8080/user/logout`;

        const config = {
            headers: {
                session_id : getSessionToken("session_id")
            }
        }

        axios
            .post(url, null, config)
            .then(() => {
                removeSessionToken("session_id");
                browserHistory.push("/");
            })
            .catch(() => {
                
            })
    }

    return (
        <div className={classes.layout}>
            <Button onClick={handleClick}>
                <Typography className={classes.logout}>Logout</Typography>
            </Button>
        </div>
    )
}

export default Logout;