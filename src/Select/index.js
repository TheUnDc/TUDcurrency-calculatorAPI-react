import "./style.css";

const Select = ({name, selectedOne, selectedTwo}) => (
    <select className="select__field" name={name}>
        <option defaultValue={selectedOne} value="EUR">Euro</option>
        <option value="USD">Dolar</option>
        <option defaultValue={selectedTwo} value="PLN">Złoty</option>
    </select>
);

export default Select;

/*
                      <select className="select__field" name="firstCurrency">
                     <option selected value="EUR">Euro</option>
                     <option value="USD">Dolar</option>
                     <option value="PLN">Złoty</option>
                  </select>
*/

/*
                      <select className="select__field" name="secondCurrency">
                     <option value="EUR">Euro</option>
                     <option value="USD">Dolar</option>
                     <option selected value="PLN">Złoty</option>
                  </select>
*/
