import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        width: "30%",
        margin: "5px",
        border: "2px solid red"
    },
    paper: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    typo: {
        color: "#6F6F6P",
        display: "flex",
        alignitems: "center",
        justifyContent: "space-around"
    }
}), {index: 1})

export {useStyles};