import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    layout: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "left-align",
        margin: "5px",
        border: "2px solid red"
    }
}), {index: 1})

export {useStyles};