import "./style.css";

const Form = ({ children, onSubmit }) => (
    <form method="post" className="form" onSubmit={onSubmit}>
        <fieldset className="from__fieldset">
            {children}
        </fieldset>
    </form>
);

export default Form;