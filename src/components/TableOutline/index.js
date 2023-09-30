import {useStyles} from  "./styles";
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import {Paper} from "@material-ui/core";

const TableOutline = (props) => {
    const classes = useStyles();

    const {tableData, tableHeadings} = props;
    
    return (
        <Paper className={classes.paper} elevation={24}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {tableHeadings.map((obj, index) => {
                                return (
                                    <TableCell key = {index} align="center">{obj.header}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {tableData?.map((row, index) => {
                                return (
                                    <TableRow key = {index}>
                                        {row?.map((obj, index) => {
                                            return (
                                                <TableCell key = {index} align="center">{obj.value}</TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default TableOutline;