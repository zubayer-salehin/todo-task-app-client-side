import React, { useState } from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";


const Calender = () => {

    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    };
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });

    const events = [
        {
            title: "Big Meeting",
            start: new Date("2022-07-01T01:01:13.982Z"),
            end: new Date("2022-07-01T02:01:13.982Z"),
        },
        {
            title: "Vacation",
            start: new Date("2022-07-02T04:00:13.982Z"),
            end: new Date("2022-07-02T05:00:13.982Z"),
        }
    ];

    const [allEvents] = useState(events);

    return (
        <div>
            <h1 className='text-3xl font-medium text-center mt-5'>Calendar</h1>
            <Calendar className='m-5 sm:m-12' localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500}} />
        </div>
    );
};

export default Calender;