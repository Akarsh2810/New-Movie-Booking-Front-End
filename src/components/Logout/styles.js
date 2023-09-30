import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        // margin: "2em",
        // padding: "2em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "10%",
        // border: "2px solid red"
    },
    logout: {
        fontSize: "1em",
        fontWeight: "bold",
    }
}))

export {useStyles}