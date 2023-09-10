import "./style.css";
import { useState, useEffect } from "react";

const DateClock = () => {

    const [dateClock, setDateClock] = useState(new Date());

    const updateDateClock = () => {
        setDateClock(new Date())
    };

    useEffect(() => {
        const timeReloader = setInterval(updateDateClock, 1000);
        return () => clearInterval(timeReloader);
    }, []);

    const displayDateTime = dateClock.toLocaleDateString
        (undefined,
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

    return (
        <span className="component_dateClock">
            Dzisiaj jest {displayDateTime}
        </span>
    )
};

export default DateClock;