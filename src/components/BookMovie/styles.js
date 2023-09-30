import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "2em",
        // border: "2px solid orange"
    },
    typo: {
        marginBottom: "3em",
        // border: "2px solid black"
    },
    formHead: {
        fontSize: "1.5em",
        fontWeight: "bold",
        color: "black"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2.5em",
        width: "25em",
        height: "30em"
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
    }
}))

export {useStyles};