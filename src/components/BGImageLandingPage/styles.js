import { makeStyles } from "@material-ui/core";
import bgImage from "../../images/landingPageBGImage.jpg";

const useStyles = makeStyles(() => ({
    layout: {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        height: "95vh",
        width: "70%",
        backgroundRepeat: "no-repeat",
        // margin: "5px",
        // border: "2px solid red"
    }
}), {index: 1})

export {useStyles};