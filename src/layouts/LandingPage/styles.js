import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    outer: {
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        // border: "2px solid green"
    },
    layout: {
        // height: "90vh",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "left-align",
        // margin: "5px",
        // border: "2px solid red"
    },
}), {index: 1})

export {useStyles};