import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        height: "99vh",
        border: "2px solid red"
    },
    pos: {
        display: "flex",
        justifyContent: "center",
    },
    booking: {
        height: "2em",
        width: "12em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid grey"
    }
}))

export {useStyles};