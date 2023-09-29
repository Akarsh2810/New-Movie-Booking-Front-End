import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    layout: {
        height: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // margin: "5px",
        // border: "2px solid red"
    },
    submit: {
        // margin: "5px",
        marginTop: "0.5em",
        border: "2px solid black",
        width: "20em",
    },
    submitWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
}), {index: 1})

export {useStyles};