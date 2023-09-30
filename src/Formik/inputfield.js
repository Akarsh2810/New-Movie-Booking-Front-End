import { FormControl } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import {useStyles} from "./styles";

const InputField = (props) => {
    const classes = useStyles();
    const {label, name, inputlabel, onValueChange, ...rest} = props;

    return (
        <div className={classes.formField}>
            <FormControl>
                <InputLabel id = {name} htmlFor = {name}>
                    {inputlabel}{" "}
                </InputLabel>
                <Input 
                    id = {name} 
                    labelid = {name} 
                    name = {name} 
                    {...rest} 
                    onChange = {(event) => {
                        onValueChange(event)
                    }}
                >
                </Input>
            </FormControl>
        </div>
    )
}

export default InputField;