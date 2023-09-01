import "./style.css";

const Form = ({ children }) => (
    <>
        <form method="post" className="form">
            <fieldset className="from__fieldset">
                {children}
            </fieldset>
        </form>
    </>
);

export default Form;