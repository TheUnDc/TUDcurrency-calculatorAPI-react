import { ClockWrapper } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

const Clock = () => {

    const displayDateTime = useCurrentDate();

    return (
        <ClockWrapper className="clock">
            Dzisiaj jest {displayDateTime}
        </ClockWrapper>
    )
};

export default Clock;