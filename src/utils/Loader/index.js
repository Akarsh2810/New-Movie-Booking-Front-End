import { CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";

const Loader = ({loading}) => {
    const classes = useStyles();
    if(loading) {
        return (
            <div className={classes.root}>
                <CircularProgress />
            </div>
        )
    }
    return null;
}

export default Loader;