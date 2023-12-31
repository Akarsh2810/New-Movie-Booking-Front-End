import { Paper, Typography } from "@material-ui/core";
import {useStyles} from "./styles";
import { Form, Formik } from "formik";
import {Box, Button} from "@material-ui/core";
import FormikControl from "../../Formik/formikcontrol";
import browserHistory from "../../routes/history";
import axios from "axios";
import {getSessionToken} from "../../utils/session";

const BookMovie = () => {
    const classes = useStyles();

    const initialValues = {
        movieName: "",
        date: "",
        timeSlot: "",
        venue: "",
        userMailId: ""
    }

    const reactOnSubmit = (values, formik) => {
        const url = `http://localhost:8080/booking`;

        const config = {
            headers: {
                session_id : getSessionToken("session_id")
            }
        }

        const data = {
            movieName : values.movieName,
            date : values.date,
            timeSlot : values.timeSlot,
            venue : values.venue,
            userMailId : values.userMailId
        }

        axios
            .post(url, data, config)
            .then(() => {
                formik.resetForm();
                browserHistory.push("/home")
            })
            .catch(() => {

            })
    }

    return (
        <div className={classes.layout}>
            <Paper className={classes.form} elevation={24}>
                <div className={classes.typo}>
                    <Typography className={classes.formHead}>Book Movie Form</Typography>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit = {reactOnSubmit}
                >
                    {(formik) => (
                        <Form>
                            <Box>
                                <FormikControl
                                    control = "input"
                                    type = "text"
                                    label = "Movie Name"
                                    name = "movie_name"
                                    inputlabel = "Movie Name"
                                    onValueChange = {(event) => {
                                        formik.setFieldValue("movieName", event.target.value);
                                    }}
                                    value = {formik.values.movieName}
                                />
                            </Box>
                            <Box>
                                <FormikControl 
                                    control = "input"
                                    type = "date"
                                    label = "Date"
                                    name = "date"
                                    // inputlabel = "Date"
                                    onValueChange = {(event) => {
                                        formik.setFieldValue("date", event.target.value);
                                    }}
                                    value = {formik.values.date}
                                />
                            </Box>
                            <Box>
                                <FormikControl 
                                    control = "input"
                                    type = "time"
                                    label = "Time Slot"
                                    name = "timeSlot"
                                    // inputlabel = "Time Slot"
                                    onValueChange = {(event) => {
                                        formik.setFieldValue("timeSlot", event.target.value);
                                    }}
                                    value = {formik.values.timeSlot}
                                />
                            </Box>
                            <Box>
                                <FormikControl 
                                    control = "input"
                                    type = "text"
                                    label = "Venue"
                                    name = "venue"
                                    inputlabel = "Venue"
                                    onValueChange = {(event) => {
                                        formik.setFieldValue("venue", event.target.value);
                                    }}
                                    value = {formik.values.venue}
                                />
                            </Box>
                            <Box>
                                <FormikControl 
                                    control = "input"
                                    type = "email"
                                    label = "Email"
                                    name = "email"
                                    inputlabel = "Email"
                                    onValueChange = {(event) => {
                                        formik.setFieldValue("userMailId", event.target.value);
                                    }}
                                    value = {formik.values.userMailId}
                                />
                            </Box>
                            <Box className={classes.submitWrapper}>
                                <Button className={classes.submit}
                                    type = "submit"
                                >
                                    SAVE BOOKING
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </div>
    )
}

export default BookMovie;