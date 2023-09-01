import "./style.css";

const Input = (props) => (
    <input className="input" type={props.type} min={props.min} name={props.name} 
        value={props.value} step={props.step} autoFocus={props.autofocus} readOnly={props.readonly}/>
); 

export default Input
