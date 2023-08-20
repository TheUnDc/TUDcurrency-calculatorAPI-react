import "./style.css";

const Buttons = ({type, label, className}) => (
    <button
        type={type}
        className={className}
    >
        {label}
    </button>
);

export default Buttons;