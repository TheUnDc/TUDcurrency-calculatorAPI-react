import { FormWrapper, FieldsetWrapper } from "./styled";

const Form = ({ children, onSubmit }) => (
    <FormWrapper 
        method="post" 
        onSubmit={onSubmit}
    >
        <FieldsetWrapper>
            {children}
        </FieldsetWrapper>
    </FormWrapper>
);

export default Form;