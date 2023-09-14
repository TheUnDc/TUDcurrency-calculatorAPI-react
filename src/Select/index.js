import { SelectWrappper } from "./styled";

const Select = ({name, selectChange, selectedValue,}) => (
    <SelectWrappper 
        name={name} 
        onChange={selectChange} 
        value={selectedValue}>
            <option value="EUR">Euro</option>
            <option value="USD">Dolar</option>
            <option value="PLN">Złoty</option>
    </SelectWrappper>
);

export default Select;
