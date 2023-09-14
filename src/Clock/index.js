import { ClockWrapper } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

const Clock = () => {

    const [clock] = useCurrentDate();

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

    return (
        <ClockWrapper className="clock">
            Dzisiaj jest {displayDateTime}
        </ClockWrapper>
    )
};

export default Clock;