import { useState } from "react";
import Loader from "../../utils/Loader";

const LandingPage = () => {
    const [loading, setLoading] = useState(true);
    return (
        <Loader loading={loading}></Loader>
    )
}

export default LandingPage;