import "./style.css";

const Label = ({innerText}) => (
    <label>
        <span className="caption__label">
            {innerText}
        </span>
    </label>
);

export default Label;