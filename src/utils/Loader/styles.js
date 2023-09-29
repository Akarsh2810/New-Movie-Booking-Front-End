import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100%",
        zIndex: 9999
    }
}))

export {useStyles};