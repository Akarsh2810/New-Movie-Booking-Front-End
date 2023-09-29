import {useStyles} from "./styles";

const BookMovie = () => {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            Book Movie Form
        </div>
    )
}

export default BookMovie;