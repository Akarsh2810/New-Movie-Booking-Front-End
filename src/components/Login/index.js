import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import EmailIdPassword from "../EmailIdPassword";

const Login = (props) => {
    const {setLoading} = props;
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography className={classes.typo}>LOGIN</Typography>
                <EmailIdPassword setLoading={setLoading} />
            </Paper>
        </div>
    )
}

export default Login;