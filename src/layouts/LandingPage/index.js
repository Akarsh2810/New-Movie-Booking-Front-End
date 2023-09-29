import { useState } from "react";
import Loader from "../../utils/Loader";
import Login from "../../components/Login";
import BGImageLandingPage from "../../components/BGImageLandingPage";
import { useStyles } from "./styles";

const LandingPage = () => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <Loader loading = {loading} />
            <BGImageLandingPage />
            <Login setLoading = {setLoading} />
        </div>
    )
}

export default LandingPage;