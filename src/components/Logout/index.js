import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles"

const Logout = () => {
    const classes = useStyles()

    return (
        <div className={classes.layout}>
            <Button>
                <Typography className={classes.logout}>Logout</Typography>
            </Button>
        </div>
    )
}

export default Logout;