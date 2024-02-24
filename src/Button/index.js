
const Buttons = ({ type, label, className, onChange, onClick }) => (
    <button
        className={className}
        type={type}
        onChange={onChange}
        onClick={onClick}
    >
        {label}
    </button>
);


export  {Buttons};