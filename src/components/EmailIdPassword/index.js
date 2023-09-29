import { Formik, Form } from "formik";
import { Box, Button } from "@material-ui/core";
import FormikControl from "../../Formik/formikcontrol";
import {useStyles} from "./styles";
import history from "../../routes/history";

const EmailIdPassword = (props) => {
    const classes = useStyles();

    const initialValues = {
        emailId: "",
        password: "",
    }

    const reactOnSubmit = () => {
        history.push("/home");
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit = {reactOnSubmit}
            >
                {(formik) => (
                    <Form className={classes.layout}>
                        <Box>
                            <FormikControl 
                                control = "input"
                                type = "email"
                                label = "EmailId"
                                name = "emailId"
                                inputlabel = "Email"
                                onValueChange = {(event) => {
                                    formik.setFieldValue("emailId", event.target.value);
                                }}
                                value = {formik.values.emailId}
                            />
                        </Box>
                        <Box>
                            <FormikControl 
                                control = "input"
                                type = "password"
                                label = "Password"
                                name = "password"
                                inputlabel = "Password"
                                onValueChange = {(event) => {
                                    formik.setFieldValue("password", event.target.value);
                                }}
                                value = {formik.values.password}
                            />
                        </Box>
                        <Box className={classes.submitWrapper}>
                            <Button className={classes.submit}
                                type = "submit"
                            >
                                LOGIN
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default EmailIdPassword;