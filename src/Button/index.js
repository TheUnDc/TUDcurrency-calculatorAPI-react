
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

/*mam watpliwosci czy component Button tak powinien wyladac */

export  {Buttons};