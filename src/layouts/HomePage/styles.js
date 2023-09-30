import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        height: "99vh",
        border: "2px solid red"
    },
    submit: {
        marginTop: "1em",
        border: "2px solid black",
        width: "20em",
    },
    submitWrapper: {
        display: "flex",
        flexDirection: "row",
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