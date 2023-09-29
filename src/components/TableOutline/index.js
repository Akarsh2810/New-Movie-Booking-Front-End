import {useStyles} from  "./styles";

const TableOutline = (props) => {
    const classes = useStyles();

    const {tableData, tableHeadings} = props;
    return (
        <div className={classes.layout}>
            {JSON.stringify(tableHeadings)}
            <br></br>
            <br></br>
            {JSON.stringify(tableData)}
        </div>
    )
}

export default TableOutline;