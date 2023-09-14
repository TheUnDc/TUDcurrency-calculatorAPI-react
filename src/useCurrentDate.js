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


    return ([clock]);

}; 