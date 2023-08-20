import Input from "./Input";
import Select from "./Select";
import { Label, Legend } from "./FieldSetCaptions";
import Buttons from "./Button";
import Paragraph from "./Paragraph";
import Container from "./Container";

function App() {
   return (
      <Container>
         <Legend innerText={"Kalkulator walut"} />

         <Paragraph>
            <Label innerText={"Waluta początkowa:"} />

            <Select name={"firstCurrency"} selectedOne={true} />
            <Input type={"number"} min={"0"} autofocus={true} value={"1"} step={"any"} />
         </Paragraph>

         <Buttons type={"button"} className={"buttons__swap"} label={"⮀ SWAP ⮀"} />

         <Paragraph>
            <Label innerText={"Waluta końcowa:"} />

            <Select name={"secoundCurrency"} selectTwo={true} />
            <Input readonly={true} type={"number"} />
         </Paragraph>

         <Buttons type={"submit"} className={"buttons__submit"} label={"Przelicz"} />
      </Container>
   )
};

export default App;
