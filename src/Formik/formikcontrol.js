import InputField from "./inputfield";

const FormikControl = (props) => {
    const {control, ...rest} = props;
    switch(control) {
        case "input":
            return (
                <InputField {...rest}/>
            )
        default: 
            return null;
    }
}

export default FormikControl;