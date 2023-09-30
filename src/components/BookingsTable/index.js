import { useEffect } from "react";
import TableOutline from "../TableOutline";
import { useStyles } from "./styles";
import { useState } from "react";
import { getSessionToken } from "../../utils/session";
import axios from "axios";

const BookingsTable = () => {
    const classes = useStyles();

    const tableHeadings = [
        {
            id: "bookingid",
            header: "BOOKING ID"
        },
        {
            id: "usermainId",
            header: "MAIL ID"
        },
        {
            id: "movieName",
            header: "MOVIE NAME"
        },
        {
            id: "timeslot",
            header: "TIME SLOT"
        },
        {
            id: "venue",
            header: "VENUE"
        },
    ]

    const [tableData, setTableData] = useState();

    useEffect(() => {
        const config = {
            headers: {
                session_id: getSessionToken("session_id")
            }
        }

        const url = `http://localhost:8080/bookings`

        axios
            .get(url, config)
            .then((data) => {
                console.log(data);
                const dataTable = [];
                // eslint-disable-next-line array-callback-return
                data?.data.map((obj) => {
                    let dataRow = [
                        {
                            id: "bookingId",
                            value: obj?.bookingId
                        },
                        {
                            id: "userMailId",
                            value: obj?.userMailId
                        },
                        {
                            id: "movieName",
                            value: obj?.movieName
                        },
                        {
                            id: "timeslot",
                            value: obj?.timeSlot
                        },
                        {
                            id: "venue",
                            value: obj?.venue
                        },
                    ]
                    dataTable.push(dataRow);
                })
                setTableData(dataTable);
            })
            .catch((error) => {

            })
    }, [])

    return (
        <div className={classes.layout}>
            <TableOutline tableHeadings={tableHeadings} tableData={tableData}/>
        </div>
    )
}

export default BookingsTable;