import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // justifycontent and alignitems are orthogonal to each other
        // flex box depends completely on justify content and alignitems
        // if flex direction is row, then justifycontent sets the content in the center of the row and and alignitems sets the content in the center of the column
        // if flex direction is row, then justifycontent sets the content in the center of the column and and alignitems sets the content in the center of the row

        // margin: "5px",
        // border: "2px solid red"
    },
    paper: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        padding: "2.5em",

        // justifyContent: "center",
        // alignitems: "center",
        
        // margin: "5px",
        border: "0.5em solid grey"
    },
    typo: {
        display: "flex",
        alignitems: "center",
        justifyContent: "space-around",

        // margin: "5px",
        // border: "2px solid black"
    }
}), {index: 1})

export {useStyles};