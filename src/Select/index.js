import "./style.css";

const Select = ({name, onChange}) => (
    <select className="select__field" name={name} onChange={onChange}>
        <option value="EUR">Euro</option>
        <option value="USD">Dolar</option>
        <option value="PLN">Złoty</option>
    </select>
);

export default Select;
