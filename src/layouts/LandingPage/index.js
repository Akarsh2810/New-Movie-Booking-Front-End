import { useState } from "react";
import Loader from "../../utils/Loader";
import Login from "../../components/Login";
import BGImageLandingPage from "../../components/BGImageLandingPage";
import { useStyles } from "./styles";
import Header from "../../components/Header";

const LandingPage = () => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.outer}>
            <div>
                <Header />
            </div>
            <div className={classes.layout}>
                <Loader loading = {loading} />
                <BGImageLandingPage />
                <Login setLoading = {setLoading} />
            </div>
        </div>
    )
}

export default LandingPage;