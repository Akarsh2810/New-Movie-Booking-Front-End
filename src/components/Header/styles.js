import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        // margin: "2em",
        // padding: "2em",
        backgroundColor: "purple",
        display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        height: "3em",
        width: "100%",
        // border: "2px solid red"
    },
    movieName: {
        // border: "2px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    movieStyle: {
        fontSize: "2em",
        fontWeight: "bold",
        color: "white",
        paddingLeft: "19em"
    }
}))

export {useStyles}