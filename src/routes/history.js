import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
})

export default browserHistory;