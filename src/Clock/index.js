import "./style.css";
import { useCurrentDate } from "../useCurrentDate";

const Clock = () => {

    const displayDateTime = useCurrentDate();

    return (
        <span className="clock">
            Dzisiaj jest {displayDateTime}
        </span>
    )
};

export default Clock;