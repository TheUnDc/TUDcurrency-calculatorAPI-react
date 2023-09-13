import { FormWrapper, FieldsetWrapper } from "./styled";

const Form = ({ children, onSubmit }) => (
    <FormWrapper method="post" className="form" onSubmit={onSubmit}>
        <FieldsetWrapper className="from__fieldset">
            {children}
        </FieldsetWrapper>
    </FormWrapper>
);

export default Form;