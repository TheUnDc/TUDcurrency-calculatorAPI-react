import { LabelWrapper } from "./styled";

const Label = ({innerText}) => (
    <label>
        <LabelWrapper>
            {innerText}
        </LabelWrapper>
    </label>
);

export default Label;