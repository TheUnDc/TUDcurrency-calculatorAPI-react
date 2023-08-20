import "./style.css";

const Input = (props) => (
    <input className="input" type={props.type} min={props.min} name={props.name} 
        value={props.value} step={props.step} autoFocus={props.autofocus} readOnly={props.readonly}/>
); 

export default Input

// <input readonly type="text" />
// <input  type="number" min="0" autofocus name="waluta" value="1" step="any" />

//<input className="fieldset__field" type="number" min="0" autofocus name="waluta" value="1" step="any" />
//<input readonly className="fieldset__field" type="text" />