import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [clock, setClock] = useState(new Date());

    const updateClock = () => {
        setClock(new Date())
    };

    useEffect(() => {
        const timeReloader = setInterval(updateClock, 1000);
        return () => clearInterval(timeReloader);
    }, []);

    const displayDateTime = clock.toLocaleDateString
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

    return ([displayDateTime]);

}; 