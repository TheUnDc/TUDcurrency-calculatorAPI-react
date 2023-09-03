import "./style.css";

const Select = ({name, selectChange, selectedValue,}) => (
    <select className="select__field" name={name} onChange={selectChange} value={selectedValue}>
        <option value="EUR">Euro</option>
        <option value="USD">Dolar</option>
        <option value="PLN">Złoty</option>
    </select>
);

export default Select;

/*
const Select = ({name, onChange, value}) => (
    <select className="select__field" name={name} onChange={onChange} value={value}>
        <option value="EUR">Euro</option>
        <option value="USD">Dolar</option>
        <option value="PLN">Złoty</option>
    </select>
);
*/