import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        // margin: "2em",
        // padding: "2em",
        backgroundColor: "purple",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "3em",
        width: "100%",
        // border: "2px solid red"
    },
    movieName: {
        // border: "2px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
    },
    movieStyle: {
        fontSize: "2em",
        fontWeight: "bold",
        color: "white"
    }
}))

export {useStyles}