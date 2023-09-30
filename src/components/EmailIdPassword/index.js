import { Formik, Form } from "formik";
import { Box, Button } from "@material-ui/core";
import FormikControl from "../../Formik/formikcontrol";
import {useStyles} from "./styles";
import history from "../../routes/history";
import axios from "axios";
import { setSessionToken } from "../../utils/session";

const EmailIdPassword = (props) => {
    const {setLoading} = props;

    const classes = useStyles();

    const initialValues = {
        emailId: "",
        password: "",
    }

    const reactOnSubmit = (values, formik) => {
        setLoading(true);

        const url = `http://localhost:8080/user/login`;
        
        const data = {
            userMailId: values.emailId,
            password: values.password,
        }
        
        const config = {
            headers: {"Content-Type" : "application/json"},
        }

        axios
            .post(url, data, config)
            .then((data) => {
                formik.resetForm();
                setLoading(false);
                setSessionToken("session_id", data?.data?.session_id);
                history.push("/home");
            })
            .catch((error) => {
                setLoading(false);
            })
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