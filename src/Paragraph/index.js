import "./style.css";

const Paragraph = (props) => (
    <p className="paragraph">
        {props.children}
    </p>
);

export default Paragraph;